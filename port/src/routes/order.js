import express from "express";
import { getOrder } from "../resolvers/foodorder/get-order.js";
import { createOrder } from "../resolvers/foodorder/create-order.js";
import { updateOrder } from "../resolvers/foodorder/update-order.js";
import { deleteOrder } from "../resolvers/foodorder/delete-order.js";

export const orderRouter = express.Router();

orderRouter.get("/", getOrder);
orderRouter.post("/", createOrder);
orderRouter.put("/", updateOrder);
orderRouter.delete("/", deleteOrder);
