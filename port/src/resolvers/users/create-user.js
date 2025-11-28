import { userModel } from "../../model/user-model.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const newUser = req.body;
  const password = newUser.password;

  const hashedPassword = await bcrypt.hash(password, 10);

  await userModel.create({ ...newUser, password: hashedPassword });

  res.send("New user added!");
};
