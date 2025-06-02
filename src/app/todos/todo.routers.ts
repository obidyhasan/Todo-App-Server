import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";

export const todoRouter = express.Router();

const filePath = path.join(__dirname, "../../../db/todo.json");

todoRouter.get("/", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  res.json(data);
});

todoRouter.post("/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log({ title, body });
  res.send("Created Todo");
});

todoRouter.get("/:title", (req: Request, res: Response) => {
  const { title } = req.params;
  console.log({ title });
  res.send("Get Single Value");
});

todoRouter.patch("/update-todo", (req: Request, res: Response) => {
  const { title } = req.query;
  const body = req.body;
  console.log({ title, body });
  res.send("Updated todo");
});

todoRouter.delete("/delete-todo", (req: Request, res: Response) => {
  const { title } = req.query;
  console.log({ title });
  res.send("deleted todo");
});
