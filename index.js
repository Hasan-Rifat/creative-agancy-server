import cors from "cors";
import express, { json } from "express";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

import * as dotenv from "dotenv";
dotenv.config();

// require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middleware

app.use(cors());
app.use(json());

// mongodb

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hpurgqo.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  try {
    await client.connect();
    const serviceCollection = client
      .db("agency-services")
      .collection("allservices");

    // read all items
    // https://creative-agancy-server.vercel.app/services

    app.get("/services", async (req, res) => {
      const result = await serviceCollection.find({}).toArray();
      res.send(result);
    });

    app.get("/service/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await serviceCollection.findOne(query);
      res.send(result);
    });
    // create
    // https://creative-agancy-server.vercel.app/service
    app.post("/service", async (req, res) => {
      const service = req.body;
      const result = await serviceCollection.insertOne(service);
      res.send(result);
    });

    // update
    // https://creative-agancy-server.vercel.app/service/
    app.put("/service/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: data,
      };
      const result = await serviceCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    // delete
    app.delete("/service/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: ObjectId(id) };
      const result = await serviceCollection.deleteOne(filter);
      res.send(result);
    });
  } finally {
  }
};

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("hello world...");
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
