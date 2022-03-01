import { createContext } from "react";
import { io } from "socket.io-client";
// import { useSelector } from "react-redux";

export const WebSocketContext = createContext(null);

export default function SocketProvider({ children }) {
  let socket;

  if (!socket) {
    socket = io.connect(`${process.env.REACT_APP_BASEURL}`);
  }

  return (
    <WebSocketContext.Provider value={{ socket }}>
      {children}
    </WebSocketContext.Provider>
  );
}
