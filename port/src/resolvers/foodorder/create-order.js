import { orderModel } from "../../model/order-model.js";
import jwt from "jsonwebtoken";
export const createOrder = async (req, res) => {
  const newOrder = req.body;
  await orderModel.create(newOrder);
  res.send("New order added!");
};
