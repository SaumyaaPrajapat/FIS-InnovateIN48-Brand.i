import React, { useState, useRef, useEffect } from 'react';
import { FaComments, FaPaperPlane, FaTimes, FaUser, FaRobot } from 'react-icons/fa';
import './ChatBot.css';
import axios from 'axios';
import Logo from '../../assets/Logo.png'
import { API_URL } from '../../utils/Utils';

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { sender: 'bot', text: "Hi, I'm Brand.i, your companion to assist you in ensuring branding consistency for your products. How can I help you today?" }
  ]);

  const chatPopupRef = useRef(null);

  const handleSendMessage = async () => {
    if (message.trim()) {
      const newChatHistory = [...chatHistory, { sender: 'user', text: message }];
      setChatHistory(newChatHistory);
      setMessage("");

      try {
        const response = await axios.post(`${API_URL}/chatbot`, { message });
        const botMessage = response.data.response;
        setChatHistory([...newChatHistory, { sender: 'bot', text: botMessage }]);
      } catch (error) {
        console.error('Error sending message to chatbot:', error);
        setChatHistory([...newChatHistory, { sender: 'bot', text: "I'm having trouble responding at the moment." }]);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatPopupRef.current && !chatPopupRef.current.contains(event.target)) {
        setIsChatOpen(false);
      }
    };

    if (isChatOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isChatOpen]);

  return (
    <div>
      <div className="chat-icon" onClick={() => setIsChatOpen(!isChatOpen)}>
        <FaComments size={30} />
      </div>
      {isChatOpen && (
        <div className="chat-popup" ref={chatPopupRef}>
          <div className="chat-header">
            <img
              src={Logo}
              alt="FIS Logo"
              style={{ height: 27, marginLeft: -15, marginBottom: 4, cursor: 'pointer' }}
            />
            <FaTimes size={20} onClick={() => setIsChatOpen(false)} style={{ cursor: 'pointer' }} />
          </div>
          <div className="chat-body">
            {chatHistory.map((msg, index) => (
              <div key={index} className={msg.sender === 'user' ? 'message user-message' : 'message bot-message'}>
                {msg.sender === 'user' ? <FaUser className="message-icon" /> : <FaRobot className="message-icon" />}
                <p dangerouslySetInnerHTML={{ __html: msg.text }} ></p>
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
