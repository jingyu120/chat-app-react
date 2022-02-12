const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/UserRoutes");
const messageRoutes = require("./routes/MessageRoutes");
const conversationRoutes = require("./routes/ConversationRoutes");

mongoose.connect(
  "mongodb+srv://jingyu120:Password123@cluster0.t2epm.mongodb.net/react-chat-app?retryWrites=true&w=majority"
);
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/conversations", conversationRoutes);

const server = app.listen(3001, () =>
  console.log("Server is listening at port", server.address().port)
);

// const server = http.createServer(app);

// app.use(express.json());
// app.use(cors());
// server.listen(3001, () => {
//   console.log("server running");
// });
// app.listen(3001, "Server is listening on 3001");
