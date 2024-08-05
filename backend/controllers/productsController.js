const Product = require("../models/productsModel");

// get all products
const getAllProducts = async (req, res) => {
  res.status(200).json("hellol from gat all router");
};

// get a single products
const getAProduct = async (req, res) => {
  res.status(200).json("hellol from gat all router");
};

// create a product
const createProduct = async (req, res) => {
  const { name, description, price, image } = req.body;

  if (!name || !description || !price || !image) {
    res.status(400).json("All fields are required");
    throw new Error("All fileds are reqyired");
  }
  try {
    const newProducts = new Product({
      name,
      description,
      price,
      image,
    });
    await newProducts.save();
    if (newProducts) {
      res.status(201).json(newProducts);
    } else {
      res.status(400).json("Error while cratingthe product");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json("Error while cratingthe product");
  }
};

// update a product
const updateProducts = async (req, res) => {
  res.status(200).json("hellol from gat all router");
};

// derlete a product
const deleteProducts = async (req, res) => {
  res.status(200).json("hellol from gat all router");
};

module.exports = {
  getAllProducts,
  getAProduct,
  createProduct,
  updateProducts,
  deleteProducts,
};
