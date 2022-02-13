import {
  createUser,
  verifyByUsername,
  findUserByID,
} from "../services/UserService";

export const UserLogin = (req, res) => {
  verifyByUsername(req.body).then((email) => res.json(email));
};

export const UserRegistration = async (req, res) => {
  const response = await createUser(req.body);
  res.json(response);
};

export const FindUser = async (req, res) => {
  const response = await findUserByID(req.params.userid);
  res.json(response);
};
