// Config starter code
import React from 'react'
import Options from "./components/Options";
import Plans from "./components/Plans"
import SendEmail from './components/SendEmail'
import Whatsapp from './components/Whatsapp'
import ScheduleCall from './components/ScheduleCall'
import CallSomeone from './components/CallSomeone'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
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
    },
    {
      widgetName: "sendEmail",
      widgetFunc: (props) => <SendEmail {...props} />
    },
    {
      widgetName: 'callSomeone',
      widgetFunc: (props) => <CallSomeone {...props} />
    },
    {
      widgetName: 'whatsapp',
      widgetFunc: (props) => <Whatsapp {...props} />
    },
    {
      widgetName: 'scheduleCall',
      widgetFunc: (props) => <ScheduleCall {...props} />
    },
    {
      widgetName: 'services',
      widgetFunc: (props) => <Services {...props} />
    },
    {
      widgetName: 'portfolio',
      widgetFunc: (props) => <Portfolio {...props} />
    },
  ]

}

export default config