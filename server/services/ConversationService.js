const ConversationModel = require("../models/Conversation");

export const createNewConversation = async (participants) => {
  const receiver = participants.receiver;
  const sender = participants.sender;
  const conversation = await new ConversationModel({
    members: [receiver, sender],
  });
  console.log(conversation);
  return conversation;
};

export const findConversationById = async (id) => {
  const conversation = await ConversationModel.find({
    members: { $elemMatch: { id } },
  });
  return conversation;
};
