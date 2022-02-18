const io = require("socket.io")(3002, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("addUser", async (userId) => {
    await addUser(userId, socket.id);
    console.log(users);
    io.emit("getUsers", users);
  });

  socket.on("sendMessage", ({ senderID, receiverID, text }) => {
    const user = getUser(receiverID);
    io.to(user.socketId).emit("getMessage", {
      senderID,
      text,
    });
  });

  socket.on("disconnect", async () => {
    console.log("a user disconnected");
    await removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
