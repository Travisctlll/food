import { foodModel } from "../../model/food-model.js";

export const createFood = async (req, res) => {
  const newFood = req.body;
  await foodModel.create(newFood);
  res.send("New food added!");
};
