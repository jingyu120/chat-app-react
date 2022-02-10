const express = require("express");

const mongoose = require("mongoose");
const authRoutes = require("./routes/UserRoutes");

mongoose.connect(
  "mongodb+srv://jingyu120:Password123@cluster0.t2epm.mongodb.net/react-chat-app?retryWrites=true&w=majority"
);
const app = express();

app.use("/api/auth", authRoutes);

app.listen(3001, () => console.log("Server is listening at 3001"));

// const server = http.createServer(app);

// app.use(express.json());
// app.use(cors());
// server.listen(3001, () => {
//   console.log("server running");
// });
// app.listen(3001, "Server is listening on 3001");
