const mongoose = require("mongoose");

const Product = require("./models/Product");

// connecting with mongodb
mongoose
  .connect(
    "mongodb+srv://sayanm:<PASSWORD>@cluster0.80wcg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("connection failed");
  });

const createProduct = async (req, res, next) => {
  const { name, price } = req.body;
  const createdProduct = new Product({
    name,
    price,
  });

  const result = await createdProduct.save();
  res.json(result);
};

const getProduct = async (req, res, next) => {

// find pulls data from mongodb and turn data obj into iterable array
// exac trun that into promises
  const products = await Product.find().exec();

  res.json(products)

};

exports.createProduct = createProduct;
exports.getProduct = getProduct;
