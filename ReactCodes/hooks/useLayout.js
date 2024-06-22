import { useLayoutEffect, useEffect } from "react";

export default function UseLayoutEffect() {
  useLayoutEffect(() => {
    console.log("useLayoutEffect"); //useLayoutEffect gets call first before useEffect
  }, []);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div className="App">
      <h1>useLayoutEffect</h1>
      <hr />
    </div>
  );
}
