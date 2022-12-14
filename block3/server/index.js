const express = require("express");
const { getUsers } = require("./users");

const port = 7000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("your server");
});

app.post("/users", (req, res) => {
  console.log(req.body);
  return res.send("post request");
});

app.listen(port, () => {
  console.log(`Server listening on port http:localhost:${port}/`);
});
