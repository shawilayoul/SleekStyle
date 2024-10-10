const dotenv = require("dotenv").config();
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const dbconnect = require("./config/db.js");
const cors = require("cors");
const path = require("path");
const Product = require("./models/productsModel.js");

const morgan = require("morgan");

const app = express();
const port = process.env.PORT ||5000;
//uploading image using multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
// mongo db connect function
dbconnect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("common"));
app.use(cors());
app.use(bodyParser.json({ limit: "16mb", extended: true })); // Make sure you add these two lines
app.use(bodyParser.urlencoded({ limit: "16mb", extended: true }));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//upload image and products to mongodb using uulter

app.post("/uploads", upload.single("image"), (req, res) => {
  const { productName, image, description, price } = req.body;

  const newImage = new Product({
    productName,
    image: req.file.path,
    description,
    price,
  });
  newImage
    .save()
    .then(() =>
      res.status(201).json({ message: "Image uploaded successfully" })
    )
    .catch((err) => res.status(400).json({ error: err.message }));
});

// updating products
app.put("/uploads/:_id", upload.single("image"), async (req, res) => {
  try {
    const productId = req.params._id;
    console.log(productId)
    const updateProduct = {
      productName: req.body.productName,
      price: req.body.price,
      description: req.body.description,
      image: req.file ? `/uploads/${req.file.filename}` : req.body.image,
    };
    console.log(updateProduct)

    const result = await Product.findByIdAndUpdate(productId, updateProduct, {
      new: true,
    });
    console.log(result)
  
     if (!result) {
      return res.status(404).json({ message: "product not found" });
    }

    res.status(200).json({
      message: "product has been updated successfully",
      product: result,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Error updating product" });
  }
});

app.use("/create-checkout", require("./routes/stripeRoute.js"));
app.use("/api/products", require("./routes/productsRoute.js"));
app.use("/api/auth", require("./routes/authRoute.js"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
