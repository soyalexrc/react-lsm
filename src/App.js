import React, { useState } from 'react';
import './App.css';
// import Navbar from './components/Navbar'
// import Carousel from './components/Carousel';
// import Prices from './components/Prices';
// import Portfolio from './components/Portfolio';
// import Features from './components/Features';
// import ContactUs from './components/ContactUs';
import Chatbot from 'react-chatbot-kit'
import messageParser from './chatbot/messageParser'
import config from './chatbot/config'
import actionProvider from './chatbot/actionProvider'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Button from '@material-ui/core/Button'



function App() {
  const [showBot, toggleBot] = useState(false)

  const saveMessages = (messages) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages))
  }

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'))
    return messages
  }

  return (
    <div className="App">
      {/* <Navbar />
      <Carousel />
      <Prices />
      <Portfolio /> 
      <Features />
      <ContactUs /> */}
      {showBot && (
        <Chatbot 
          config={config} 
          actionProvider={actionProvider} 
          messageParser={messageParser} 
          messageHistory={loadMessages}
          saveMessages={saveMessages}
        />
      )}

      <Button onClick={() => toggleBot((prev) => !prev)} variant="contained" color="default">
        chatBot
      </Button>
    </div>
  );
}

export default App;
