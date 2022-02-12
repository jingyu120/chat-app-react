const MessageModel = require("../models/messages");

export const saveMessage = (message) => {
  const savedMessage = new MessageModel(message).save();
  return savedMessage;
};

export const findConversation = (conversationId) => {
  const conversation = MessageModel.find({
    conversationId,
  });
  return conversation;
};
