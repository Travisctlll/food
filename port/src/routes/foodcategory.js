import express from "express";
import { getCategory } from "../resolvers/foodcategory/get-category.js";
import { createCategory } from "../resolvers/foodcategory/create-category.js";
import { updateCategory } from "../resolvers/foodcategory/update-category.js";
import { deleteCategory } from "../resolvers/foodcategory/delete-category.js";

export const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);
categoryRouter.post("/", createCategory);
categoryRouter.put("/", updateCategory);
categoryRouter.delete("/", deleteCategory);
