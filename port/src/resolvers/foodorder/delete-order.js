import { orderModel } from "../../model/order-model.js";

export const deleteOrder = async (req, res) => {
  const token = req.headers.authorization;
  try {
    const checkData = jwt.verify(token, "secret-key");
    if (checkData.role === "ADMIN") {
      const deletedOrder = req.body;
      await orderModel.findByIdAndDelete(deletedOrder.id);
      res.send("Order deleted successfully");
    }
  } catch (err) {
    console.log(err);
    res.status(404).json("failed");
  }
};
