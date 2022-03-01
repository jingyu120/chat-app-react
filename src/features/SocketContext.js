import { createContext } from "react";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";
import { addFollower } from "./userReducer";
// import { useSelector } from "react-redux";

export const WebSocketContext = createContext(null);

export default function SocketProvider({ children }) {
  let socket;
  const dispatch = useDispatch();

  if (!socket) {
    socket = io.connect(`${process.env.REACT_APP_BASEURL}`);

    socket.on("newFriendRequest", (data) => {
      dispatch(addFollower(data.uid));
    });

    // socket.on("event://get-message", (msg) => {
    //   const payload = JSON.parse(msg);
    //   dispatch(updateChatLog(payload));
    // });

    // ws = {
    //   socket: socket,
    //   // sendMessage,
    // };
  }

  return (
    <WebSocketContext.Provider value={{ socket }}>
      {children}
    </WebSocketContext.Provider>
  );
}
