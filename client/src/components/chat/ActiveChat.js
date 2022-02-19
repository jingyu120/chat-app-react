import React, { useEffect, useRef } from "react";
import Message from "./Message";

function ActiveChat({ currentConversation, user }) {
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentConversation.messages]);

  return (
    <div>
      {currentConversation.messages &&
        currentConversation.messages.map((m, i) => {
          const received = user._id !== m.sender;
          return (
            <div key={i} ref={scrollRef}>
              <Message
                received={received}
                messageData={m}
                user={user}
                currentConversation={currentConversation}
              />
            </div>
          );
        })}
    </div>
  );
}

export default ActiveChat;
