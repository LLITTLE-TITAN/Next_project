import React, { useState, useEffect } from 'react';
import type { NextPage } from "next";

const LivesStreamPageDark: NextPage = () => {
  const [zoomFactor, setZoomFactor] = useState(100); // Initial zoom factor is 100%

  const handleZoom = (delta: number) => {
    setZoomFactor((prevFactor) => {
      const newFactor = prevFactor + delta;
      return Math.min(200, Math.max(100, newFactor)); // Ensure the zoom factor stays within the range of 100 to 200
    });
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault(); // Prevent default zoom behavior when Ctrl key is pressed
        const delta = e.deltaY > 0 ? -10 : 10; // Adjust the delta based on the scroll direction
        handleZoom(delta);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div
      style={{
        transform: `scale(${zoomFactor / 100})`,
        transformOrigin: 'top left',
        width: '100%', // Set the width to 100%
        height: '100%', // Set the height to 100%
        display: 'flex',
        alignItems: 'center', // Center the content horizontally
        justifyContent: 'center', // Center the content vertically
      }}
    >
      <div
        className="relative overflow-hidden pt-5 pb-[30px] pr-6 pl-3.5 box-border gap-[4px] tracking-[normal] text-left text-xl text-black font-headline-2-regular mq900:pl-6 mq900:box-border"
      >
        {/* Your page content goes here */}
      </div>
      <button onClick={() => handleZoom(10)}>+</button>
      <button onClick={() => handleZoom(-10)}>-</button>
    </div>
  );
};

export default LivesStreamPageDark;
