const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb://usuario1:usuario1@ds121475.mlab.com:21475/escoladb",
  {
    useNewUrlParser: true
  }
);
app.use(express.json());

app.use(require("./routes"));

app.listen(3000, () => {
  console.log("Api rodando !! ");
});
