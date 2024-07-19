const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT;



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('common'))
app.use(cors());

app.use("/create-checkout", require("./routes/stripeRoute.js"));
app.use('/api/products',require('./routes/productsRoute.js'))
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
