const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>
  res.json([
    {
      name: "Abe",
      email: "me@abechoi.com",
    },
  ])
);

app.listen(port, () => console.log(`Listening to port:${port}...`));
