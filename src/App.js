import Input from "./components/Input";
import React, { useState } from "react";
import Tasks from "./components/Tasks";

export default function App() {
  const [list, setList] = useState([]);

  const addList = (input) => {
    setList([...list, input]);
  };

  console.log(list, "--list");
  const remoItem = (id) => {
    const newArry = list.filter((el) => el.id !== id);
    setList(newArry);
  };

  const checItem = (el, event) => {
    let checked = event.target.checked;
    const newArry = list.map((elem) => {
      if (elem.id === el.id) {
        elem.status = checked;
      }
      return elem;
    });
    setList(newArry);
  };

  return (
    <div className="App">
      <Input addList={addList} />
      <Tasks checItem={checItem} remoItem={remoItem} list={list} />
      <h1>Hello word</h1>
    </div>
  );
}
