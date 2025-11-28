import { categoryModel } from "../../model/category-model.js";

export const getCategory = async (req, res) => {
  const category = await categoryModel.find();
  res.status(200).json(category);
};
