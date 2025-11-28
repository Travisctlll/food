import { orderModel } from "../../model/order-model.js";
import { uptadeFood } from "../foods/update-food.js";

export const updateOrder = async (req, res) => {
  const updatedOrder = req.body;

  await orderModel.findByIdAndUpdate(req.body.id, {
    user: updatedOrder.user,
    totalPrice: updatedOrder.totalPrice,
    foodOrderItems: updatedOrder.foodOrderItems,
    status: updatedOrder.status,
  });
  res.send("Order uptaded succesfully  ");
};
