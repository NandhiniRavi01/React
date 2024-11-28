import React, { useState } from "react";
import "../css/Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "Me", time: "10:22", text: "Hello am new to this system can i get a breakdown on how it works?" },
    { sender: "Agent Rue", time: "10:24", text: "Yes we currently run both on our platform here" },
    { sender: "Me", time: "3 minutes ago", text: "Please, can you go into details bout the service" },
  ]);

  const agents = [
    { name: "Agent Rue", online: true },
    { name: "Agent Daniel", online: false, unread: 10 },
    { name: "Agent Rose", online: false, unread: 9 },
    { name: "Agent William", online: true },
  ];

  return (
    <div className="chat-container">
      <div className="chat-sidebar">
        {agents.map((agent, index) => (
          <div key={index} className={`agent ${agent.online ? "online" : "offline"}`}>
            <span>{agent.name}</span>
            {agent.unread && <span className="unread">{agent.unread}</span>}
          </div>
        ))}
        <button className="new-trade">New Trade</button>
      </div>
      <div className="chat-main">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === "Me" ? "sent" : "received"}`}>
              <p>{msg.text}</p>
              <span className="time">{msg.sender}, {msg.time}</span>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Start typing here..." />
          <button className="send-btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
