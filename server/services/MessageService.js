const MessageModel = require("../models/messages");

export const saveMessage = (message) => {
  const savedMessage = new MessageModel(message).save();
  return savedMessage;
};

export const findConversation = async (conversationId) => {
  const conversation = await MessageModel.find({
    conversationId,
  });
  return conversation;
};
