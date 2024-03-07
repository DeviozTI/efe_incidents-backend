import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";

import { routerAdmin } from "./routes/admin.route";
import { myDataSource } from "./database/app-data-source";
import { User } from "./entity/User";

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
app.use(express.json());
app.use(
  cors({
    // origin: process.env.CLIENT_URL,
    origin: "*",
  })
);

app.use("/admin", routerAdmin);
app.get("/users", async (req: Request, res: Response) => {
  const users = await myDataSource.getRepository(User).find();
  return res.json(users);
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`🚀 Server is running on port ${process.env.PORT || 3001}`);
});
