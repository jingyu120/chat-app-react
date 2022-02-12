import User from "../models/User";

const UserModel = require("../models/User");
export const createUser = async (data) => {
  const user = await UserModel.findOne({ username: data.username });
  if (user) {
    console.log("exists");
    return "exist";
  } else {
    await new UserModel(data).save();
    console.log("success");
    return "success";
  }
};

export const verifyByUsername = async (data) => {
  const { username, password } = data;
  const user = await UserModel.findOne({ username });
  if (password === user.password) {
    return user.email;
  } else {
    return null;
  }
};
