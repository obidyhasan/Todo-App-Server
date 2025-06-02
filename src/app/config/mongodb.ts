import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://todo:todo@cluster0.0m3jt.mongodb.net/todoDB?retryWrites=true&w=majority&appName=Cluster0";

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
