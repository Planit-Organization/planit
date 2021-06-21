const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/assets")));

app.use("/build", express.static(path.join(__dirname, "../build")));


app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
