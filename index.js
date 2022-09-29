const express = require("express");
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const { connectToServer } = require("./utils/dbConnect");
const servicesRouter = require("./routers/v1/services.route");
const oderRouter = require("./routers/v1/order.route");
const paymentMethod = require("./routers/v1/payment.route");
const usersRoute = require("./routers/v1/users.route");
const adminRoute = require("./routers/v1/admin.route");
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

//payment methods
app.use("/api/v1/create-payment-intent", paymentMethod);

// user routes
app.use("/api/v1/users", usersRoute);

//admin routes
app.use("/api/v1/admin", adminRoute);

app.get("/", (req, res) => {
  res.send("hello world...");
});

app.all("*", (req, res) => {
  res.send("not found");
});
