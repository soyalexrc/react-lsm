import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel';
import Prices from '../components/Prices';
import Portfolio from '../components/Portfolio';
import Features from '../components/Features';
import ContactUs from '../components/ContactUs';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles'
import { Box, Fab } from '@material-ui/core';
import Chatbot from 'react-chatbot-kit'
import messageParser from '../chatbot/messageParser'
import config from '../chatbot/config'
import actionProvider from '../chatbot/actionProvider'
import Services from '../components/Services';

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
      bottom:'10%',
      right:'2%', 
      height:'500px',
      '& .react-chatbot-kit-chat-message-container':{
        overflowX: 'hidden',
      }
    }
  }
)

function App() {
  const classes = useStyles()
  const [showBot, setShowBot] = useState(false)

  const saveMessages = (messages) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages))
  }

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'))
    return messages
  }

  const Bot = () => {
    setShowBot(!showBot)
  }

  return (
    <div className="App" >
      <Navbar />
      <Carousel />
      <Services />
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
      {showBot ? 
        <Fab onClick={Bot} className={classes.button} variant="extended" color="secondary">
        <CloseIcon fontSize="large" /> 
      </Fab>
        :
      <Fab onClick={Bot} className={classes.button} variant="extended" color="primary">
        <InsertCommentIcon style={{ paddingRight: '8px' }} /> chat
      </Fab>
      }

      
    </div>
  );
}

export default App;
