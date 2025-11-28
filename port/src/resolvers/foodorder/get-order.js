import { orderModel } from "../../model/order-model.js";

export const getOrder = async (req, res) => {
  const order = await orderModel
    .find()
    .populate(["user", "foodOrderItems.food"]);
  res.status(200).json(order);
};
