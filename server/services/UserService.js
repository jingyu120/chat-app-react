const UserModel = require("../models/User");
export const createUser = (data) => {
  const user = new UserModel(data);
  user.save();
};

export const findByUsername = async (data) => {
  const { username, password } = data;
  const user = await UserModel.findOne({ username });
  if (password === user.password) {
    return user.email;
  } else {
    return null;
  }
};
