import React from 'react';
import { gsap } from 'gsap';

const HoverAnim = (WrappedComponent, options = {}, text) => {
  const { underlineColor = '#fff', underlineHeight = '1px', animationDuration = '0.3'} = options;

  return props => {
    const textRef = React.useRef(null);
    const underlineRef = React.useRef(null);

    const handleMouseEnter = () => {
      gsap.fromTo(
        underlineRef.current,
        { width: '0%', left: '0%' },
        { width: '100%', ease: 'power2.out',duration: animationDuration }
      );
    };

    const handleMouseLeave = () => {
      gsap.fromTo(
        underlineRef.current,
        { width: '100%', left: '0%' },
        { width: '0%', left: '100%',  ease: 'power2.out'}
      );
    };

    return (
      <div
        className="hover-underline-container inline-block relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <WrappedComponent ref={textRef} {...props} />
        <div
          className="underline absolute left-0 bottom-0 w-0 h-2 ease-linear"
          ref={underlineRef}
          style={{
            backgroundColor: underlineColor,
            height: underlineHeight,
            bottom: `-${underlineHeight}`

          }}
        ></div>
      </div>
    );
  };
};

export default HoverAnim;
