const UserModel = require("../models/User");
export const createUser = (data) => {
  const user = new UserModel(data);
  user.save().then(() => console.log("user saved"));
};
