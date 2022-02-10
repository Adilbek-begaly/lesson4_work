import React, { useState } from "react";

function Input({ addList }) {
  const [input, setInput] = useState("");

  const addClean = () => {
    let myObj = {
      id: Date.now(),
      text: input,
      status: false
    };
    addList(myObj);
    setInput("");
  };
  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="enter To Do"
        value={input}
      />
      <button onClick={addClean}>Add Team </button>
    </div>
  );
}
export default Input;
