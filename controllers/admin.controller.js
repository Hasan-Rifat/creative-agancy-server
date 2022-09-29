const { getDb } = require("../utils/dbConnect");

module.exports.makeAdmin = async (req, res, next) => {
  const db = getDb();

  const email = req.params.email;
  const filter = { email: email };
  const updateDoc = { $set: { role: "admin" } };
  const result = await db.collection("users").updateOne(filter, updateDoc);
  res.send(result);
};

module.exports.deleteAdmin = async (req, res, next) => {
  const db = getDb();
  const email = req.params.email;
  const query = { email: email };
  const result = await db.collection("users").deleteOne(query);
  res.send(result);
};
