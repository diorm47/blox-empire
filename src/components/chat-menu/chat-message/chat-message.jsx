import React from "react";
import "./chat-message.css";

function ChatMessage({ message, avatar, user_name, UserStatus, message_time }) {
  return (
    <div className="chat_message_item">
      <div className="chat_message_user">
        <div>
          <img src={avatar} alt={avatar} />
          <p>{user_name}</p>
          <UserStatus />
        </div>
        <div className="chat_message_sent_time">
          <p>{message_time}</p>
        </div>
      </div>
      <div className="chat_message_text">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
