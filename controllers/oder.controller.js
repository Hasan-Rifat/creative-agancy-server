// order get
const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");

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
  const data = req.body;
  const query = { _id: ObjectId(id) };
  const options = { upsert: true };
  const result = await db
    .collection("order")
    .updateOne(query, { $set: data }, options);
  res.send(result);
};

// order delete
module.exports.deleteOrder = async (req, res, next) => {
  const db = getDb();
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await db.collection("order").deleteOne(query);
  res.send(result);
};
