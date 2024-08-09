const multer = require("multer");
// Set up multer for file storage
const storage = multer.memoryStorage();
const upload = multer({ storage });
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
router.post("/",upload.single('image'),createProduct);

router.put("/:id",updateProducts);

router.delete("/:id",deleteProducts);


module.exports = router;
