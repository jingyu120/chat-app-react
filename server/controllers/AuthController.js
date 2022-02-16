import { createUser, verifyByUsername } from "../services/UserService";

export const UserLogin = (req, res) => {
  verifyByUsername(req.body).then((email) => res.json(email));
};

export const UserRegistration = async (req, res) => {
  const response = await createUser(req.body);
  res.json(response);
};
