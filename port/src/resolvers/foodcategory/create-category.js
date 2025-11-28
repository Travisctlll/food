import { categoryModel } from "../../model/category-model.js";

export const createCategory = async (req, res) => {
  const newCategory = req.body;
  await categoryModel.create({
    name: newCategory.name,
    phone: newCategory.phone,
  });
  res.send("New category added!");
};
