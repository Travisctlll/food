import { categoryModel } from "../../model/category-model.js";

export const updateCategory = async (req, res) => {
  const uptadedCategory = req.body;

  await categoryModel.findByIdAndUpdate(req.body.id, {
    name: uptadedCategory.name,
    phone: uptadedCategory.phone,
  });
  res.send("Category uptaded succesfully");
};
