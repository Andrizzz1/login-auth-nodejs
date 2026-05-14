import app from "./src/app";
import "dotenv/config";

const port = process.env.PORT;
const environment = process.env.ENV;

const start = async () => {
  app.listen(port, () => {
    console.log(
      `Server is running on the port ${port} in environment ${environment}`,
    );
  });
};

start().catch((err) => {
  console.log(`Failed to start the server: ${err}`);
  process.exit(1);
});
