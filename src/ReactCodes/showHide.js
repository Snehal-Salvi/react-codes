import { useState } from "react";

export default function ShowHide() {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <button onClick={() => setShow(!show)}>
          {show ? "Hide Element Below" : "Show Element Below"}
        </button>
  
        {show && <div>Toggle Challenge</div>}
      </>
    );
  }
  