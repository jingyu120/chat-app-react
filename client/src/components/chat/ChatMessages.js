import React, { useRef, useEffect } from "react";
import Message from "./Message";
function ChatMessages({ messageList, user, sender }) {
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);
  return (
    <div>
      {messageList &&
        messageList.map((m, i) => {
          const received = user._id !== m.sender;
          return (
            <div key={i} ref={scrollRef}>
              <Message
                received={received}
                messageData={m}
                senderName={sender.name}
                user={user}
              />
            </div>
          );
        })}
    </div>
  );
}

export default ChatMessages;
