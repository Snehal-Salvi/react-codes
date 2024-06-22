import React, { useEffect, useState } from "react";

export default function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "pink", height: "100px", width: "500px" }}>
        <h1 style={{ textAlign: "center" }}>
          window Size = {windowSize.width} X {windowSize.height}
        </h1>
      </div>
    </>
  );
}
