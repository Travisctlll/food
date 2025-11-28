import { categoryModel } from "../../model/category-model.js";
import jwt from "jsonwebtoken";
export const deleteCategory = async (req, res) => {
  const token = req.headers.authorization;
  try {
    const checkData = jwt.verify(token, "secret=key");
    if (checkData.role === "ADMIN") {
      const deletedCategory = req.body;
      await categoryModel.findByIdAndDelete(deletedCategory.id);
      res.send("Category deleted successfully!");
    }
  } catch (err) {
    console.log(err);
    res.status(404).json("failed");
  }
};
