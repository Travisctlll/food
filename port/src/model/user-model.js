import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  id: Object,
  name: { type: String, require: true },
  email: String,
  phone: Number,
  password: String,
  adress: String,
  role: { type: String, enum: ("USER", "ADMIN") },
  orderedFoods: ObjectId,
  ttl: Date,
  isVerified: String,
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

export const userModel = mongoose.model("user", UserSchema);
