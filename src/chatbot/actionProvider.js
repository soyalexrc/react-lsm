
// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  //asi se crean los metodos para tener respuestas 'predisenadas'
  initialGreeting = () => {
    //menasje
    const message = this.createChatBotMessage('hola, bienvenido!')
    
    // estamos envianto al chat el nuevo mensaje pero preservando los anteriores (state)
    this.addMessageToState(message)
  }
  
  //se pueden mandar a llamar componentes junto con mensajes en forma de (widgets) como objeto de configuracion
  handleNewProduct = () => {
    const message = this.createChatBotMessage('Tenemos variedad de servicios y productos para ti, por favor especifica en que plan estas interesado?', 
    {
      widget: 'plans'
    })

    this.addMessageToState(message)
  }

  whoWeAre = () =>{
    const message = this.createChatBotMessage('somos una empresa de servicos digitales, especializados en diseno web robusto, funcional, interactivo y moderno. realizamos todo tipo de web apps, desde las mas complejas hasta las mas sencillas, te invito a que nos contactes (mensaje de ejemplo, no se que mas poner jeje XD)')

    this.addMessageToState(message)
  }

  ourExperience = () => {
    const message = this.createChatBotMessage('tenemos una amplia covertura de experiencia laboral, hemos trabajado con royectos desde 0, y remodelado proyectos con una mala o vieja arquitectura, Ecommerces, apps, landing pages, todas con nuestro robusto stack tecnologias a la vanguardia para mejor rendimiento y blablabla (XD)')

    this.addMessageToState(message)
  }

  handleBasicPlan = () => {
    const message = this.createChatBotMessage('el plan basico cuesta 2 lochas, no seas pichirre')

    this.addMessageToState(message)
  }

  
  handleExecutivePlan = () => {
    const message = this.createChatBotMessage('este es el propio rey xD')

    this.addMessageToState(message)
  }

  
  handleEnterprisePlan = () => {
    const message = this.createChatBotMessage('el plan empresarial es demasiado arrecho, tu eres loco ramon?')

    this.addMessageToState(message)
  }

  handleSendEmail = () => {
    const message = this.createChatBotMessage("Llena el formulario para ponerte en contacto con nosotros!",
    {
      widget: 'sendEmail'
    })

    this.addMessageToState(message)
  }

  // la magia de agregar los mensajes sin alterar el estado anterior, o mejor dicho... enviando el estado anterior y luego agregando el nuevo estado (message)
  addMessageToState = (message) => {
    this.setState(state => ({
      ...state,
      messages: [...state.messages, message],
    }))
  }
}

export default ActionProvider; 