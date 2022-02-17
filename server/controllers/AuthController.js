import { createUser, verifyByUsername } from "../services/UserService";

export const UserLogin = async (req, res) => {
  const user = await verifyByUsername(req.body);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(500).json(user);
  }
  // verifyByUsername(req.body).then((email) => res.json(email));
};

export const UserRegistration = async (req, res) => {
  const response = await createUser(req.body);
  res.json(response);
};
