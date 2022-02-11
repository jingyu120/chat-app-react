import { createUser, verifyByUsername } from "../services/UserService";

export const UserLogin = (req, res) => {
  verifyByUsername(req.body).then((email) => res.json(email));
};

export const UserRegistration = (req, res) => {
  createUser(req.body);
};
