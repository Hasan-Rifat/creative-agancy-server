const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");

module.exports.getAllService = async (req, res) => {
  const db = getDb();
  const result = await db.collection("allservices").find({}).toArray();
  res.send(result);
};

module.exports.getSingleService = async (req, res) => {
  const db = getDb();
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await db.collection("allservices").findOne(query);
  res.send(result);
};

module.exports.postService = async (req, res) => {
  const db = getDb();
  const data = req.body;

  const result = await db.collection("allservices").insertOne(data);
  res.send(result);
};

module.exports.putService = async (req, res) => {
  const db = getDb();
  const id = req.params.id;
  const data = req.body;
  const query = { _id: ObjectId(id) };
  const options = { upsert: true };
  const result = await db
    .collection("allservices")
    .updateOne(query, { $set: data }, options);
  res.send(result);
};

module.exports.deletedService = async (req, res) => {
  const db = getDb();
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await db.collection("allservices").deleteOne(query);
  res.send(result);
};
