import express, { Application, NextFunction, Request, Response } from "express";
import { todoRouter } from "./todos/todo.routers";
const app: Application = express();

// Middleware
app.use(express.json());
app.use("/todos", todoRouter);

app.get("/", (req: Request, res: Response) => {
  // console.log(something);
  res.send("Welcome to the Todo app server");
});

app.get("/error", (req: Request, res: Response, next: NextFunction) => {
  try {
    // console.log(something);
    res.send("Welcome to the Todo app server Error");
  } catch (error) {
    next(error);
  }
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Route Not Found");
});

// Global Error Handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    console.log("error", error);
    res
      .status(400)
      .json({ message: "Something went wrong global error handler!" });
  }
});

export default app;

/**
 * Basic file structure ------
 * server - server handling like - starting, closing, error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic, handling like create read update delete, database related works
 */
