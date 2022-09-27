const express = require("express");
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const servicesRouter = require("./routers/v1/services.route");
const oderRouter = require("./routers/v1/order.route");
const paymentMethod = require("./routers/v1/payment.route");
const { connectToServer } = require("./utils/dbConnect");

// payment

const app = express();
const port = process.env.PORT || 5000;

// middleware

app.use(cors());
app.use(express.json());

// mongodb

connectToServer((error) => {
  if (!error) {
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}`)
    );
  } else {
    console.log(error);
  }
});
// services routes
app.use("/api/v1/services", servicesRouter);
//order routers
app.use("/api/v1/order", oderRouter);
app.use("/api/v1/create-payment-intent", paymentMethod);

// payment methods

/* const run = async () => {
  try {
    await client.connect();
    const serviceCollection = client
      .db("agency-services")
      .collection("allservices");

    const bookingCollection = client
      .db("agency-services")
      .collection("booking");

    const paymentCollection = client
      .db("agency-services")
      .collection("payment");

    // read all items
    // https://creative-agancy-server.vercel.app/api/v1/services
  } finally {
  }
};

run().catch(console.dir); */

app.get("/", (req, res) => {
  res.send("hello world...");
});

app.all("*", (req, res) => {
  res.send("not found");
});
