const ConversationModel = require("../models/conversation");

export const createNewConversation = (participants) => {
  const conversation = new ConversationModel({
    members: [participants.senderID, participants.receiverID],
  });
  return conversation;
};

export const findConversationById = (id) => {
  const conversation = ConversationModel.find({
    members: { $in: [id] },
  });
  return conversation;
};
