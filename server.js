import app from "./src/app";
import "dotenv/config";
import connectDB from "./src/common/config/db.config.js";

const port = process.env.PORT;
const environment = process.env.ENV;

const start = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(
      `Server is running on the port ${port} in ${environment} mode.`,
    );
  });
};

start().catch((err) => {
  console.log(`Failed to start the server: ${err}`);
  process.exit(1);
});
