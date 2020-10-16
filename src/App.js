import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Carousel from './components/Carousel';
import Prices from './components/Prices';
import Portfolio from './components/Portfolio';
import Features from './components/Features';
import ContactUs from './components/ContactUs';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import { makeStyles } from '@material-ui/core/styles'
import { Box, Fab } from '@material-ui/core';
import Chatbot from 'react-chatbot-kit'
import messageParser from './chatbot/messageParser'
import config from './chatbot/config'
import actionProvider from './chatbot/actionProvider'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles ({
  button:{
    display: 'scroll',
    position: 'fixed',
    bottom: '2%',
    right: '2%'
    },
    chatBot:{
      position: 'fixed',
      bottom:'9%',
      right:'2%', 
      height:'500px'
    }
  }
)

function App() {
  const classes = useStyles()
  const [showBot, toggleBot] = useState(false)

  const saveMessages = (messages) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages))
  }

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'))
    return messages
  }

  return (
    <div className="App" >
      <Navbar />
      <Carousel />
      <Prices />
      <Portfolio /> 
      <Features />
      <ContactUs />
      {showBot && (
        <Box className={classes.chatBot} boxShadow={3}>
          <Chatbot 
            className={classes.button}
            config={config} 
            actionProvider={actionProvider} 
            messageParser={messageParser} 
            messageHistory={loadMessages}
            saveMessages={saveMessages}
          />
        </Box>
      )}
      <Fab onClick={() => toggleBot((prev) => !prev)} className={classes.button} variant="contained" color="default">
        <InsertCommentIcon style={{ paddingRight: '8px' }} /> chat
      </Fab>
    </div>
  );
}

export default App;
