const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const stripe = require("stripe")(
  "sk_test_51PcwcKHJQxQ42hCciFzLtkXOnQXYDfdpRnzQctI6ijIsOjbRvLXYQV4r7hzJ8u8FLGpuPBMxOSkJDSKT3vv2p76l00AlGPCjme"
);

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
/*
app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods:{
        enabled:true
      }
      //payment_method_types: ['card'],
    });

   res.send({
      clientSecret: paymentIntent.stripe,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));*/
app.post("/create-checkout-session", async (req, res) => {
  const { products } = req.body;
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.name,
        images: [product.image],
        quantity: product.quantity,
      },
    },
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });
  res.json({ id: session.id });
});
const port = 5000;
app.listen(port, () => console.log("server is running on port ", port));
