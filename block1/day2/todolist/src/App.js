import "./App.css";
import { List } from "./components/comp";
import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [checked, setChecked] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const enterClick = (event) => {
    if (event.code === "Enter") {
      setList([...list, { task: inputValue, checked: false }]);
      setChecked([...checked, false]);
      setInputValue("");
    }
  };
  const deleteAll = () => {
    setList([]);
  };
  return (
    <div className="ToDoContainer">
      <div className="garchig">ToDo List</div>
      <div>
        <input
          id="inputHeseg"
          placeholder="New Task"
          type={"text"}
          value={inputValue}
          onKeyPress={enterClick}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          id="addButton"
          onClick={() => {
            setList([...list, { task: inputValue, checked: false }]);
            setChecked([...checked, false]);
            setInputValue("");
          }}
        >
          Add
        </button>
      </div>
      <div className="progressContainer">
        {list.length !== 0 && (
          <progress
            className="progress"
            max={list.length}
            value={checked.reduce((curr, prev) => prev + curr, 0)}
          />
        )}
      </div>
      <div className="listContainerX">
        {list.map((el, index) => {
          return (
            <List
              props={el.task}
              list={list}
              setList={setList}
              index={index}
              checked={checked}
              setChecked={setChecked}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
