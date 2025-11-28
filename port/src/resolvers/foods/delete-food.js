import { foodModel } from "../../model/food-model.js";
import jwt from "jsonwebtoken";
export const deleteFood = async (req, res) => {
  const token = req.headers.authorization;
  try {
    const checkData = jwt.verify(token, "secret-key");
    if (checkData.role === "ADMIN") {
      const deletedFood = req.body;
      await foodModel.findByIdAndDelete(deletedFood.id);
      res.send("Food deleted successfully!");
    }
  } catch (err) {
    console.log(err);
    res.status(404).json("failed");
  }
};
