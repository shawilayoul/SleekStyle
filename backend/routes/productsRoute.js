const express = require("express");
const {
  getAllProducts,
  getAProduct,
  createProduct,
  updateProducts,
  deleteProducts,
} = require("../controllers/productsController");

const router = express.Router();

router.get("/",getAllProducts);
router.get("/:id",getAProduct);

router.post("/",createProduct);

router.put("/:id",updateProducts);

router.delete("/:id",deleteProducts);


module.exports = router;
