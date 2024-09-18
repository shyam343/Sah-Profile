// src/components/Chatbot.js
import React, { useState } from 'react';
import './chatbot.css';  // Import the CSS file here

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const newMessage = { text: input, user: "You" };
    setMessages([...messages, newMessage]);
    setInput("");

    const response = await getChatbotResponse(input);
    setMessages([...messages, newMessage, { text: response, user: "Bot" }]);
  };

  const getChatbotResponse = async (message) => {
    const res = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    return data.reply;
  };

  return (
    <div className="chatbot-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user}`}>
            <strong>{msg.user}: </strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
