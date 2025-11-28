import { foodModel } from "../../model/food-model.js";

export const uptadeFood = async (req, res) => {
  const updatedFood = req.body;

  await foodModel.findByIdAndUpdate(req.body.id, {
    name: updatedFood.name,
    phone: updatedFood.phone,
  });
  res.send("Food uptaded succesfully!");
};
