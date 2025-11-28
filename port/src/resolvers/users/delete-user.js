import { userModel } from "../../model/user-model.js";
import jwt from "jsonwebtoken";

export const deleteUser = async (req, res) => {
  const token = req.headers.authorization;
  try {
    const checkData = jwt.verify(token, "secret-key");
    if (checkData.role === "ADMIN") {
      const deletedUser = req.body;
      await userModel.findByIdAndDelete(deletedUser.id);
      res.send("User deleted successfully!");
    }
  } catch (err) {
    console.log(err);
    res.status(404).json("failed");
  }
};
