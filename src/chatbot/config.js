// Config starter code
import React from 'react'
import Options from "./Options";
import Plans from "./Plans"
import { createChatBotMessage } from "react-chatbot-kit";

const botName ='LSMbot'

//aqui podemos cambiar esteticamente el chatBot (revisa la documentacion)
const config = {
  botName: botName,
  initialMessages: [createChatBotMessage(`Hola! mi nombre es ${botName} y estoy aqui para asistirte, en que puedo ayudarte?`,
  {
    widget: 'options'
  })],
  widgets: [
    {
      widgetName: 'options',
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: 'plans',
      widgetFunc: (props) => <Plans {...props} />
    }
  ]

}

export default config