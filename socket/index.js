const io = require("socket.io")(3002, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userID, socketID) => {
  !users.some((user) => user.userID === userID) &&
    users.push({ userID, socketID });
};

const removeUser = (socketID) => {
  users = users.filter((user) => {
    user.socketID !== socketID;
  });
};

const getUser = (userID) => {
  return users.find((user) => {
    user.userID = userID;
  });
};

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("addUser", async (userID) => {
    await addUser(userID, socket.id);
    console.log(users);
    io.emit("getUsers", users);
  });

  //   socket.on("sendMessage", ({ senderID, receiverID, text }) => {
  //     const user = getUser(receiverID);
  //     console.log(user);
  //     io.to(user.socketID).emit("getMessage", {
  //       senderID,
  //       text,
  //     });
  //   });

  socket.on("disconnect", async () => {
    console.log("a user disconnected");
    await removeUser(socket.id);
    console.log(users);
    io.emit("getUsers", users);
  });
});
