const { getDb } = require("../utils/dbConnect");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
module.exports.paymentMethod = async (req, res) => {
  const service = req.body;
  const price = service.price;
  const amount = price * 100;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  res.send({ clientSecret: paymentIntent.client_secret });
};
