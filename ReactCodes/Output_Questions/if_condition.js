import React from "react";

export default function if_condition() {
  if (true) {
    const [message, setMessage] = useState("DEFAULT MESSAGE");
    return <span>{message}</span>;
  }
  return <span>NO MESSAGE</span>;
}

/*
Using useState (or any other React Hook) inside an if statement 
or any conditional block violates the Rules of Hooks. 

React relies on the order of hooks to be consistent across renders, 
so placing a hook inside a conditional can cause unpredictable behavior and errors.

Conditional Execution: If the condition is true, the hook will execute.
If the condition is false in a subsequent render, the hook will not execute, 
leading to a mismatch in the hook order across renders. 
This inconsistency will cause React to throw an error.

React Hook Order Mismatch: React expects hooks to be called in 
the same order on every render. If a hook is skipped or called out of order, 
React will be unable to match up the hooks with their previous values, 
leading to errors like:

"React has detected a change in the order of Hooks called by [YourComponentName]. 
This will lead to bugs and errors."
 */
