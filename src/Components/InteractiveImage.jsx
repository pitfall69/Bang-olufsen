import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import Button from "./Button"
const InteractiveImage = () => {
  const imageContainerRef = useRef(null);
  const [imageSrc] = useState("/src/assets/Mosaic_land_clot_1.png");
  const easeFactor = useRef(0.02);
  const mousePosition = useRef({ x: 0.5, y: 0.5 });
  const targetMousePosition = useRef({ x: 0.5, y: 0.5 });
  const prevPosition = useRef({ x: 0.5, y: 0.5 });
  const aberrationIntensity = useRef(0.0);

  useEffect(() => {
    let scene, camera, renderer, planeMesh;

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      uniform sampler2D u_texture;    
      uniform vec2 u_mouse;
      uniform vec2 u_prevMouse;
      uniform float u_aberrationIntensity;

      void main() {
          vec2 gridUV = floor(vUv * vec2(30.0, 30.0)) / vec2(30.0, 30.0);
          vec2 centerOfPixel = gridUV + vec2(1.0/30.0, 1.0/30.0);
          
          vec2 mouseDirection = u_mouse - u_prevMouse;
          
          vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
          float pixelDistanceToMouse = length(pixelToMouseDirection);
          float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);
   
          vec2 uvOffset = strength * - mouseDirection * 0.2;
          vec2 uv = vUv - uvOffset;

          vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
          vec4 colorG = texture2D(u_texture, uv);
          vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

          gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
      }
    `;

    const initializeScene = (texture) => {
      console.log("Initializing scene...");
      // Create scene
      scene = new THREE.Scene();

      // Create camera
      camera = new THREE.PerspectiveCamera(
        getFOV(window.innerWidth),
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 1;
      const imgAspectRatio = texture.image.width / texture.image.height;
      const canvasAspectRatio = window.innerWidth / window.innerHeight;

      let scaleX, scaleY;
      if (canvasAspectRatio > imgAspectRatio) {
        scaleX = canvasAspectRatio / imgAspectRatio;
        scaleY = 1;
      } else {
        scaleX = 1;
        scaleY = imgAspectRatio / canvasAspectRatio;
      }

      // Create uniforms
      const shaderUniforms = {
        u_mouse: { type: "v2", value: new THREE.Vector2() },
        u_prevMouse: { type: "v2", value: new THREE.Vector2() },
        u_aberrationIntensity: { type: "f", value: 0.0 },
        u_texture: { type: "t", value: texture },
      };

      // Create plane geometry with adjusted scale
      const geometry = new THREE.PlaneGeometry(scaleX * 2, scaleY * 2);
      planeMesh = new THREE.Mesh(
        geometry,
        new THREE.ShaderMaterial({
          uniforms: shaderUniforms,
          vertexShader,
          fragmentShader,
        })
      );
      scene.add(planeMesh);
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      imageContainerRef.current.appendChild(renderer.domElement);

      window.addEventListener("resize", onWindowResize, false);

      console.log("Scene initialized.");
    };

    const getFOV = (width) => {
      if (width < 768) {
        return 115;
      } else if (width < 1024) {
        return 60;
      } else {
        return 55;
      }
    };
    const onWindowResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.fov = getFOV(window.innerWidth);
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        console.log("Window resized.");
      }
    };

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      imageSrc,
      (texture) => {
        console.log("Texture loaded.");
        initializeScene(texture);
        animateScene();
      },
      undefined,
      (error) => {
        console.error("Error loading texture:", error);
      }
    );

    const animateScene = () => {
      const animationId = requestAnimationFrame(animateScene);

      mousePosition.current.x +=
        (targetMousePosition.current.x - mousePosition.current.x) *
        easeFactor.current;
      mousePosition.current.y +=
        (targetMousePosition.current.y - mousePosition.current.y) *
        easeFactor.current;

      planeMesh.material.uniforms.u_mouse.value.set(
        mousePosition.current.x,
        1.0 - mousePosition.current.y
      );

      planeMesh.material.uniforms.u_prevMouse.value.set(
        prevPosition.current.x,
        1.0 - prevPosition.current.y
      );

      aberrationIntensity.current = Math.max(
        0.0,
        aberrationIntensity.current - 0.05
      );
      planeMesh.material.uniforms.u_aberrationIntensity.value =
        aberrationIntensity.current;

      renderer.render(scene, camera);

      return () => cancelAnimationFrame(animationId);
    };

    const handleMouseMove = (event) => {
      easeFactor.current = 0.02;
      const rect = imageContainerRef.current.getBoundingClientRect();
      prevPosition.current = { ...targetMousePosition.current };

      targetMousePosition.current.x = (event.clientX - rect.left) / rect.width;
      targetMousePosition.current.y = (event.clientY - rect.top) / rect.height;

      aberrationIntensity.current = 1;
    };

    const handleMouseEnter = (event) => {
      easeFactor.current = 0.02;
      const rect = imageContainerRef.current.getBoundingClientRect();

      mousePosition.current.x = targetMousePosition.current.x =
        (event.clientX - rect.left) / rect.width;
      mousePosition.current.y = targetMousePosition.current.y =
        (event.clientY - rect.top) / rect.height;
    };

    const handleMouseLeave = () => {
      easeFactor.current = 0.05;
      targetMousePosition.current = { ...prevPosition.current };
    };

    if (imageContainerRef.current) {
      imageContainerRef.current.addEventListener("mousemove", handleMouseMove);
      imageContainerRef.current.addEventListener(
        "mouseenter",
        handleMouseEnter
      );
      imageContainerRef.current.addEventListener(
        "mouseleave",
        handleMouseLeave
      );
    }
    return () => {
      if (renderer) {
        renderer.dispose();
      }
      window.removeEventListener("resize", onWindowResize);
      if (imageContainerRef.current) {
        imageContainerRef.current.removeEventListener("mousemove", handleMouseMove);
        imageContainerRef.current.removeEventListener("mouseenter", handleMouseEnter);
        imageContainerRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [imageSrc]);

  return (
    <div
      id="imageContainer"
      ref={imageContainerRef}
      style={{ width: "100vw", height: "100vh", overflow: "hidden" , position:"relative" }}
    >
      <div className="absolute w-full flex max-sm:mt-[-10vh] flex-col items-center justify-center top-0 left-0 z-[99]">
        <h1 className="text-[6rem] max-sm:text-[2.2rem] text-center  text-white font-Decorative  uppercase leading-none">
          Experience the Ultimate <br /> Audio Innovation and Design
        </h1>
        <p className="text-md font-primary text-white w-[40%] max-sm:text-xs max-sm:w-[90%] text-center mt-5">Bang & Olufsen has been a pioneer in the audio industry for decades, delivering unmatched sound quality combined with cutting-edge design. Discover our range of products that redefine the audio experience.</p>
      <Button text={'Explore Now'} customclassName={''}/>
      </div>
    </div>
  );
};

export default InteractiveImage;

