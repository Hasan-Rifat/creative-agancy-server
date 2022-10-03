const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");

module.exports.getReview = async (req, res) => {
  const db = getDb();
  const review = await db.collection("review").find({}).toArray();
  res.send(review);
};

module.exports.createReview = async (req, res) => {
  const db = getDb();
  const data = req.body;
  const result = await db.collection("review").insertOne(data);
  res.send(result);
};

module.exports.updateReview = async (req, res) => {
  const db = getDb();
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const review = req.body;
  const result = await db
    .collection("review")
    .updateOne(query, { $set: review }, { update: true });
  res.send(result);
};

module.exports.deleteReview = async (req, res) => {
  const db = getDb();
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await db.collection("review").deleteOne(query);
  res.send(result);
};
