const express = require("express");
const {
  getAllProducts,
  getAProduct,
  updateProducts,
  deleteProducts,
} = require("../controllers/productsController");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:_id", getAProduct);

router.put("/:_id", updateProducts);
router.delete("/:_id", deleteProducts);

module.exports = router;
