import express from "express";

const app = express;

app.get("/apo/products", (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log("listen to server");
});
