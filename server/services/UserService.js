import User from "../models/User";

const UserModel = require("../models/User");
export const createUser = async (data) => {
  const user = await UserModel.findOne({ username: data.username });
  if (user) {
    return "exist";
  } else {
    await new UserModel(data).save();
    return "success";
  }
};

export const verifyByUsername = async (data) => {
  const { username, password } = data;
  const user = await UserModel.findOne({ username });
  if (user && password === user.password) {
    return user;
  } else {
    return null;
  }
};

export const findUserByID = async (userID) => {
  try {
    const user = await UserModel.findById(userID);
    return user;
  } catch (error) {
    console.log(error);
  }
};
