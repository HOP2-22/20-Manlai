import React, { useState } from "react";

function App() {
  // const deletelistValue = useState("");

  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function deleteHandler(itemIndex) {
    const result = list.filter((item, index) => index !== itemIndex);
    setList(result);
  }

  return (
    <div>
      TodoList
      <input
        type={"text"}
        value={inputValue}
        placeholder="New Task"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setList([...list, inputValue]);
        }}
      >
        Add
      </button>
      <div>
        {list.map((toDo, index) => {
          return (
            <div key={index}>
              <input
                type={"checkbox"}
                onClick={(e) => {
                  console.log(e.target.checked);
                }}
              />
              {toDo}
              <button
                onClick={() => {
                  // setList(list.filter((item, i) => i !== index));
                  deleteHandler(index);
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      {/* <button
        onClick={() => {
          list.forEach((item, index) => {
            console.log(item, index);
          });
        }}
      >
        log
      </button> */}
    </div>
  );
}
export default App;
