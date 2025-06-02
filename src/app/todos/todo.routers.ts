import express, { Request, Response } from "express";
import path from "path";
import { client } from "../config/mongodb";
import { ObjectId } from "mongodb";

export const todoRouter = express.Router();
const filePath = path.join(__dirname, "../../../db/todo.json");

const todoCollection = client.db("todoDB").collection("todo");

todoRouter.get("/", async (req: Request, res: Response) => {
  const todo = await todoCollection.find({}).toArray();
  res.send(todo);
});

todoRouter.post("/create-todo", async (req: Request, res: Response) => {
  const todo = req.body;
  const result = await todoCollection.insertOne(todo);
  res.send(result);
});

todoRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await todoCollection.findOne({ _id: new ObjectId(id) });
  res.send(result);
});

todoRouter.patch("/update-todo/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, body, isCompleted } = req.body;
  const result = await todoCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { title, body, isCompleted } }
  );
  res.send(result);
});

todoRouter.delete("/delete-todo/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await todoCollection.deleteOne({ _id: new ObjectId(id) });
  res.send(result);
});
