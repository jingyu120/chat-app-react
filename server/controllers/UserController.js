import {
  findUserByID,
  findUserByName,
  findUserByEmail,
} from "../services/UserService.js";

export const FindUser = async (req, res) => {
  const response = await findUserByID(req.params.userid);
  res.json(response);
};

export const SearchUsers = async (req, res) => {
  const username = req.query.username;
  const email = req.query.email;
  const users = username
    ? await findUserByName(username)
    : await findUserByEmail(email);
  res.json(users);
};
