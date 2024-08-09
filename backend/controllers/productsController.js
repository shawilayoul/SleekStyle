const multer = require("multer");
// Set up multer for file storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

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
  const {productName, image, description, price } = req.body;
  // Convert buffer to base64 string
  //const imageBase64 = image.buffer.toString("base64");

 /* if (!productName || !image || !description || !price ) {
    res.status(400).json("All fields are required");
    throw new Error("All fileds are reqyired");
  }*/
  try {
    const newProducts = new Product({
      productName,
      image,
      description,
      price,
    });
    await newProducts.save();
    if (newProducts) {
      res.status(201).json(newProducts);
    } else {
      res.status(400).json("Error while crating the product");
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
