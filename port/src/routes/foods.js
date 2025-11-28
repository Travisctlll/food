import express from "express";
import { getFood } from "../resolvers/foods/get-food.js";
import { createFood } from "../resolvers/foods/create-food.js";
import { uptadeFood } from "../resolvers/foods/update-food.js";
import { deleteFood } from "../resolvers/foods/delete-food.js";
import { foodModel } from "../model/food-model.js";
import { getFoodByCategory } from "../resolvers/foods/getFoodByCategory.js";

export const foodRouter = express.Router();
foodRouter.get("/", getFood);
foodRouter.get("/:categoryId", getFoodByCategory);
foodRouter.post("/", createFood);
foodRouter.put("/", uptadeFood);
foodRouter.delete("/", deleteFood);
