
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("FutureShot AI Backend is running 🚀");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("FutureShot AI backend started");
});
