const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>
  res.json([
    {
      name: "Abe",
      email: "me@abechoi.com",
    },
    {
      name: "Alice",
      email: "alice@gmail.com",
    },
    {
      name: "Jake",
      email: "jam@gmail.com",
    },
    {
      name: "Maria",
      email: "mlove@abechoi.com",
    },
    {
      name: "Roku",
      email: "roku@abechoi.com",
    },
  ])
);

app.listen(port, () => console.log(`Listening to port:${port}...`));
