import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FoodSchema = new Schema({
  id: ObjectId,
  foodname: { type: String, require: true },
  price: Number,
  image: String,
  ingredients: String,
  category: { type: Schema.ObjectId, require: true, ref: `category` },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});
export const foodModel = mongoose.model("food", FoodSchema);
