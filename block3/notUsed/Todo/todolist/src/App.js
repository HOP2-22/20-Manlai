import "./App.css";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Container } from "@mui/material";
// import Typography from "@mui/material/Typography";

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.terget.checked) {
      updatedList = [...checked, event.terget.checked];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const isChecked = (Todo) =>
    checked.includes(Todo) ? "checked-item" : "not-checked";

  function remove(itemIndex) {
    const result = list.filter((item, index) => index !== itemIndex);
    setList(result);
  }
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f64eb1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          height: "500px",
          width: "500px",
          borderRadius: "10px",
        }}
      >
        <Container>
          <h1>Todo App</h1>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box>
              <input
                type={"text"}
                placeholder="Add new Todo"
                style={{ width: "350px", height: "25px" }}
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
              />
              <Button
                onClick={() => {
                  const temp = [...list];
                  temp.push(inputValue);
                  setList(temp);
                  setInputValue("");
                }}
              >
                +
              </Button>
            </Box>
            <Box>
              {list.map((Todo, index) => {
                return (
                  <Box key={index} sx={{ display: "flex" }}>
                    <input type={"checkbox"} onChange={handleCheck} />
                    <Box className={isChecked(Todo)}>{Todo}</Box>
                    <Button onClick={() => remove(index)}>Delete</Button>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
