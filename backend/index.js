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
const port = process.env.PORT;
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
  const { productName,image, description, price } = req.body;

  const newImage = new Product({
    productName,
    image:req.file.path,
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

app.use("/create-checkout", require("./routes/stripeRoute.js"));
app.use("/api/products", require("./routes/productsRoute.js"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
