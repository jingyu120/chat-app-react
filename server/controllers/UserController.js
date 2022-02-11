import { createUser, findByUsername } from "../services/UserService";

export const UserLogin = (req, res) => {
  findByUsername(req.body).then((email) => res.json(email));
};

export const UserRegistration = (req, res) => {
  createUser(req.body);
};
