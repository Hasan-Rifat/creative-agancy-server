// order get
const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");
require("dotenv").config();

module.exports.getCheckout = async (req, res, next) => {
  const db = getDb();
  const result = await db.collection("checkout").find({}).toArray();
  res.send(result);
};

// order single get

module.exports.getSingleCheckout = async (req, res, next) => {
  const db = getDb();
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await db.collection("checkout").findOne(query);
  res.send(result);
};
// order post
module.exports.createCheckout = async (req, res, next) => {
  const db = getDb();
  const data = req.body;
  const result = await db.collection("checkout").insertOne(data);
  res.send(result);
};

// order update
module.exports.updateCheckout = async (req, res, next) => {
  const db = getDb();
  const id = req.params.id;
  const checkoutData = req.body;
  const query = { _id: ObjectId(id) };
  const options = { upsert: true };
  const updateDoc = {
    $set: checkoutData,
  };
  const result = await db
    .collection("checkout")
    .updateOne(query, updateDoc, options);

  res.send(result);
};

// order delete
module.exports.deleteCheckout = async (req, res, next) => {
  const db = getDb();
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await db.collection("checkout").deleteOne(query);
  res.send(result);
};
