const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const DataSchema = mongoose.model(
  "Data",
  new mongoose.Schema({
    name: String,
    des: String,
    imageURL: String,
    price: Number,
    basket: Array,
    wishlist: Array,
  })
);

app.get("/data", async (req, res) => {
  const allData = await DataSchema.find({});
  res.send({ message: "success", data: allData });
});

app.post("/data", async (req, res) => {
  const newData = await new DataSchema(req.body);
  newData.save();
  res.send({ message: "success", newData: newData });
});

app.delete("/data/:id", async (req, res) => {
  let id = req.params.id;
  console.log(id);

  let deleteData = await DataSchema.findByIdAndDelete(id);
  //   res.send({ message: "success", data: deleteData });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("mondodb connented");
  })
  .catch((err) => {
    console.log("failed connented");
  });
