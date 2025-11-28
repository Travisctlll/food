import express from "express";
import { router } from "./routes/users.js";
import mongoose from "mongoose";
import { foodRouter } from "./routes/foods.js";
import { categoryRouter } from "./routes/foodcategory.js";
import { orderRouter } from "./routes/order.js";
import cors from "cors";

const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json());
app.use("/users", router);
app.use("/food", foodRouter);
app.use("/category", categoryRouter);
app.use("/order", orderRouter);

mongoose
  .connect("mongodb+srv://gantushig03:Tushig0329@food.3wwybgi.mongodb.net/")
  .then(() => console.log("Connected!"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
