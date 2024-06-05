// import { TweenMax, Power2, Power3 } from "gsap";
// import React, { useRef, useEffect } from "react";

// const AudioPlayButton = () => {
//   const canvasRef = useRef(null);
//   const audioRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");

//     const opt = {
//       width: canvas.offsetWidth,
//       height: canvas.offsetHeight,
//       midY: canvas.offsetHeight / 2,
//       points: 200, // Increased number of points for a smoother wave
//       stretch: 20, // Decreased stretch for smaller wavelength
//       sinHeight: 2, // Smaller sine height for subtle waves
//       speed: -0.05, // Adjust speed for smoother animation
//       strokeColor: "rgba(0,0,0,0.7)",
//       strokeWidth: 1.5,
//       power: false,
//     };

//     canvas.width = opt.width * 2;
//     canvas.height = opt.height * 2;
//     canvas.style.width = `${opt.width}px`;
//     canvas.style.height = `${opt.height}px`;

//     context.scale(2, 2);
//     context.strokeStyle = opt.strokeColor;
//     context.lineWidth = opt.strokeWidth;
//     context.lineCap = "round";
//     context.lineJoin = "round";

//     let time = 0;

//     const render = () => {
//       window.requestAnimationFrame(render);
//       context.clearRect(0, 0, opt.width, opt.height);
//       time += opt.speed;

//       context.beginPath();
//       for (let i = 0; i <= opt.points; i++) {
//         const x = (opt.width / opt.points) * i;
//         const y =
//           opt.midY +
//           Math.sin((time * i) / opt.stretch) * opt.sinHeight * Math.cos((time * i) / (opt.stretch / 2));

//         context.lineTo(x, y);
//       }
//       context.stroke();
//     };

//     render();

//     canvas.addEventListener("click", () => {
//       opt.power = !opt.power;

//       if (opt.power) {
//         audioRef.current.play();
//         TweenMax.to(opt, 1, {
//           sinHeight: 4, // Adjusted sine height for more visible wave when playing
//           stretch: 30, // Adjusted stretch for dynamic wave changes
//           ease: Power2.easeInOut
//         });
//       } else {
//         audioRef.current.pause();
//         TweenMax.to(opt, 1, {
//           sinHeight: 2, // Reset sine height
//           stretch: 20, // Reset stretch
//           ease: Power3.easeOut,
//         });
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <canvas
//         ref={canvasRef}
//         className="h-[50px] w-[50px]"
//       ></canvas>
//       <audio
//         ref={audioRef}
//         id="audio"
//         src="src/assets/Audio/in-y2mate.com - Bang  Olufsen  Exist To Create.mp3"
//         loop
//       ></audio>
//     </div>
//   );
// };

// export default AudioPlayButton;

import { TweenMax, Power2, Power3 } from "gsap";
import React, { useRef, useEffect } from "react";

const AudioPlayButton = () => {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const opt = {
      width: canvas.offsetWidth,
      height: canvas.offsetHeight,
      midY: canvas.offsetHeight / 2,
      points: 20,
      stretch: 180,
      sinHeight: 6,
      speed: -0.05,
      strokeColor: "rgba(0,0,0,0.7)",
      strokeWidth: 1.5,
      power: false,
    };

    canvas.width = opt.width * 2;
    canvas.height = opt.height * 2;
    canvas.style.width = `${opt.width}px`;
    canvas.style.height = `${opt.height}px`;

    context.scale(2, 2);
    context.strokeStyle = opt.strokeColor;
    context.lineWidth = opt.strokeWidth;
    context.lineCap = "round";
    context.lineJoin = "round";

    let time = 0;
    let eraseTimeout;

    const drawWave = () => {
      context.beginPath();
      for (let i = 0; i <= opt.points; i++) {
        const x = (opt.width / opt.points) * i;
        const y =
          opt.midY +
          Math.sin((time * i) / opt.stretch) * opt.sinHeight * Math.cos((time * i) / (opt.stretch / 2));

        context.lineTo(x, y);
      }
      context.stroke();
    };

    const clearWave = () => {
      context.clearRect(0, 0, opt.width, opt.height);
    };

    const render = () => {
      window.requestAnimationFrame(render);
      if (opt.power) {
        time += opt.speed;
        clearWave();
        drawWave();

        if (eraseTimeout) clearTimeout(eraseTimeout);
        eraseTimeout = setTimeout(clearWave, 100); // Clears the wave after 500ms
      }
    };

    render();

    canvas.addEventListener("click", () => {
      opt.power = !opt.power;

      if (opt.power) {
        audioRef.current.play();
        TweenMax.to(opt, 1, {
          sinHeight: 6,
          stretch: 230,
          ease: Power2.easeInOut
        });
      } else {
        audioRef.current.pause();
        TweenMax.to(opt, 1, {
          sinHeight: 2,
          stretch: 20,
          ease: Power3.easeOut,
        });
        clearWave();
      }
    });
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        className="h-[50px] w-[50px]"
      ></canvas>
      <audio
        ref={audioRef}
        id="audio"
        src="src/assets/Audio/in-y2mate.com - Bang  Olufsen  Exist To Create.mp3"
        loop
      ></audio>
    </div>
  );
};

export default AudioPlayButton;

