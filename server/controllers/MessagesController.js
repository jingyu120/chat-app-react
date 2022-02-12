export const GetAllMessages = (req, res) => {
  const messages = FindAllMessages(req.body);
};
