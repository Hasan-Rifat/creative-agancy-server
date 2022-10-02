// order get
const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");
require("dotenv").config();

module.exports.getOrder = async (req, res, next) => {
  const db = getDb();
  const result = await db.collection("order").find({}).toArray();
  res.send(result);
};

// order single get

module.exports.getSingleOrder = async (req, res, next) => {
  const db = getDb();
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await db.collection("order").findOne(query);
  res.send(result);
};
// order post
module.exports.createOrder = async (req, res, next) => {
  const db = getDb();
  const data = req.body;
  const result = await db.collection("order").insertOne(data);
  res.send(result);
};

// order update
module.exports.updateOrder = async (req, res, next) => {
  const db = getDb();
  const id = req.params.id;
  const paymentData = req.body;
  const query = { _id: ObjectId(id) };
  const options = { upsert: true };
  const updateDoc = {
    $set: {
      paid: true,
      paymentId: paymentData.paymentId,
      orderId: paymentData.orderId,
      title: paymentData.title,
      description: paymentData.description,
      price: paymentData.price,
      image: paymentData.image,
      email: paymentData.email,
      orderId: paymentData._id,
    },
  };
  const result = await db
    .collection("order")
    .updateOne(query, updateDoc, options);
  res.send(updateDoc);
};

// order delete
module.exports.deleteOrder = async (req, res, next) => {
  const db = getDb();
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await db.collection("order").deleteOne(query);
  res.send(result);
};
