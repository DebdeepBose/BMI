import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Send, Bell, Settings } from 'lucide-react';
import './hecker.css'; 

const socket = io('http://localhost:3001', { autoConnect: false });

export default function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    socket.connect();

    socket.on('receive-message', (newMsg) => {
      setMessages((prev) => [...prev, newMsg]);
    });

    return () => socket.disconnect();
  }, []);

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        text: inputValue,
        sender: 'You',
        time: new Date().toLocaleTimeString(),
      };

      setMessages((prev) => [...prev, newMessage]);
      socket.emit('send-message', newMessage);
      setInputValue('');
    }
  };

  return (
    <div className="chatroom-container">
      {/* Header */}
      <header className="chatroom-header">
        <button onClick={() => socket.emit('create-room')} className="create-room-btn">
          Create Room
        </button>
        <div className="header-icons">
          <button className="icon-btn">
            <Bell />
          </button>
          <button className="icon-btn">
            <Settings />
          </button>
        </div>
      </header>

      {/* Messages */}
      <div className="chatroom-messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`message-row ${msg.sender === 'You' ? 'sent' : 'received'}`}
          >
            <div className={`message-bubble ${msg.sender === 'You' ? 'sent-bubble' : 'received-bubble'}`}>
              <p>{msg.text}</p>
              <p className="timestamp">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="chatroom-input">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
          className="message-input"
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className="send-btn">
          <Send />
        </button>
      </div>
    </div>
  );
}
