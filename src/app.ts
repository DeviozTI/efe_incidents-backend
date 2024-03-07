import "dotenv/config";
import express from "express";
import cors from "cors";
import { routerAdmin } from "./routes/admin.route";
const PORT = process.env.PORT || 3001;

const app = express();
app.use(
  cors({
    // origin: process.env.CLIENT_URL,
    origin: "*",
  })
);

app.use("/admin", routerAdmin);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
