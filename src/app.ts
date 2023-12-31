import express from "express";
import todoRouter from "./routes/todos";
import { errorHandler } from "./middleware/errorhandler";
import { connectToDatabase } from "./config/connect";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", todoRouter);
app.use(errorHandler);
connectToDatabase()
  .then((res) => {
    app.listen(4000, () => console.log("Server running on port 4000"));
  })
  .catch((err) => console.log(err));
