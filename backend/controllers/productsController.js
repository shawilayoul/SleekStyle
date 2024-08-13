const Product = require("../models/productsModel");

// get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(400).json("Error while cratingthe product");
  }
};

// get a single products
const getAProduct = async (req, res) => {
  res.status(200).json("hellol from gat all router");
};

// update a product
const updateProducts = async (req, res) => {
  res.status(200).json("hellol from gat all router");
};

// derlete a product
const deleteProducts = async (req, res) => {
  try {
     await Product.findByIdAndDelete(req.params._id);
     res.status(200).json('Product has been deleted successfully')
  } catch (error) {
    console.log(error);
    res.status(400).json("Error while deleting the product");
  }
};

module.exports = {
  getAllProducts,
  getAProduct,
  updateProducts,
  deleteProducts,
};
