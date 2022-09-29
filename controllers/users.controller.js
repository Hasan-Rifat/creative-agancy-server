const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");

// user get
module.exports.usersGet = async (req, res, next) => {
  const db = getDb();
  const result = await db.collection("users").find({}).toArray();
  res.send(result);
};

// get single user
module.exports.userGet = async (req, res, next) => {
  const db = getDb();
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await db.collection("users").findOne(query);
  res.send(result);
};
//user create
module.exports.userCreate = async (req, res, next) => {
  const db = getDb();
  const data = req.body;
  const result = await db.collection("users").insertOne(data);
  res.send(result);
};
//user update
module.exports.userUpdate = async (req, res, next) => {
  const db = getDb();
  const user = req.body;
  const email = req.params.email;
  const filter = { email: email };
  const options = { upsert: true };
  const updateDoc = { $set: user };
  const result = await db
    .collection("users")
    .updateOne(filter, updateDoc, options);
  res.send(result);
};

// user delete
module.exports.userDelete = async (req, res, next) => {
  const db = getDb();
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await db.collection("users").update(query);
  res.send(result);
};
