import app from "./app";
import { client } from "./config/mongodb";
const port = 5000;

let server;
const bootstrap = async () => {
  await client.connect();
  server = app.listen(port, () => {
    console.log(`✅ Server listening on port ${port}`);
  });
};

bootstrap();
