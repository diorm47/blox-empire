import React, { useState } from "react";
import "./chat-menu.css";

import { ReactComponent as RightChevron } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as Status_1 } from "../../assets/icons/status-lvl-1.svg";
import { ReactComponent as Status_2 } from "../../assets/icons/status-lvl-2.svg";
import { ReactComponent as Status_3 } from "../../assets/icons/status-lvl-3.svg";
import { ReactComponent as SmileIcon } from "../../assets/icons/smile-face.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/send-icon.svg";
import user_avatar_1 from "../../assets/images/user-avatar.png";
import user_avatar_2 from "../../assets/images/user-avatar-2.png";
import user_avatar_3 from "../../assets/images/user-avatar-3.png";
import user_avatar_4 from "../../assets/images/user-avatar-4.png";

import ChatMessage from "./chat-message/chat-message";

function ChatMenu({ toggleMenu }) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const chat_messages = [
    {
      id: 1,
      message:
        "Yo Reddit! What’s a small thing that anyone can do at nearly anytime to improve their mood and make them happier?",
      user_name: "BakuGang",
      user_status: Status_1,
      avatar: user_avatar_1,
      message_time: "12:16",
    },
    {
      id: 2,
      message: "How to design a product that can grow itself 10x in year:",
      user_name: "Fairfield",
      user_status: Status_2,
      avatar: user_avatar_1,
      message_time: "12:16",
    },
    {
      id: 3,
      message: "How to design a product that can grow itself 10x in year:",
      user_name: "Pembroke Pines",
      user_status: Status_3,
      avatar: user_avatar_2,
      message_time: "12:16",
    },
    {
      id: 4,
      message: "Any mechanical keyboard enthusiasts ",
      user_name: "Naperville",
      user_status: Status_3,
      avatar: user_avatar_3,
      message_time: "12:16",
    },
    {
      id: 5,
      message: "The unseen of spending three years at Pixelgrade",
      user_name: "Toledo",
      user_status: Status_2,
      avatar: user_avatar_4,
      message_time: "12:16",
    },
    {
      id: 6,
      message: "Any mechanical keyboard enthusiasts ",
      user_name: "Naperville",
      user_status: Status_2,
      avatar: user_avatar_3,
      message_time: "12:16",
    },
    {
      id: 7,
      message: "Why choose a theme that looks good with WooCommerce",
      user_name: "Toledo",
      user_status: Status_1,
      avatar: user_avatar_2,
      message_time: "12:16",
    },
  ];
  return (
    <div className="chat_menu_wrapper">
      <div className="chat_menu_top">
        <div className="chat_right_chevron" onClick={toggleMenu}>
          <RightChevron />
        </div>
        <div className="chat_title">
          <h2>Chat</h2>
        </div>
        <div className="top_chat_iden">
          <div></div>
          <p>1 712</p>
        </div>
      </div>
      <div className="chat_messages">
        <div className="chat_messages_content">
          {chat_messages.map((message_item) => (
            <ChatMessage
              key={message_item.id}
              message={message_item.message}
              user_name={message_item.user_name}
              UserStatus={message_item.user_status}
              avatar={message_item.avatar}
              message_time={message_item.message_time}
            />
          ))}
        </div>

        <div className="chat_message_input">
          <div className="chat_message_input_item">
            <input type="text" onChange={handleChange} />
            <SmileIcon />
            <button>
              <SendIcon />
            </button>
          </div>
          <div className="message_symbols_counter">
            <p> {inputValue.length} / 150</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatMenu;
