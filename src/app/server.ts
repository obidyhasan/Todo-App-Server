import app from "./app";
const port = 5000;

let server;
const bootstrap = async () => {
  server = app.listen(port, () => {
    console.log(`✅ Server listening on port ${port}`);
  });
};

bootstrap();
