import { createUser } from "../services/UserService";

export const UserLogin = (req, res) => {
  console.log("someone signed in");
  return res.json("signed in user");
};

export const UserRegistration = (req, res) => {
  createUser(req.body);
  return res.json("registration successful");
};
