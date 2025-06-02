import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { todoRouter } from "./todos/todo.routers";
const app: Application = express();

// Middleware
app.use(express.json());
app.use("/todos", todoRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Todo app server");
});

export default app;

/**
 * Basic file structure ------
 * server - server handling like - starting, closing, error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic, handling like create read update delete, database related works
 */
