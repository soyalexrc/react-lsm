// MessageParser starter code
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message)
    //pasar todo a minusculas para que no haya errores tipograficos
    const lowerCase = message.toLowerCase()
    
    //puede ser tan complejo como sea posible con un monton de operadores logicos
    if (lowerCase.includes('hola')) {
    //metodo que es llamado desde el actionProvider (donde se crean todas las respuestas) 
      this.actionProvider.initialGreeting()
    }

    if(lowerCase.includes('servicios') || lowerCase.includes('planes') || lowerCase.includes('paquetes')) {
      this.actionProvider.handleNewProduct()
    }

    if(lowerCase.includes('quienes son') || lowerCase.includes('de donde son') || lowerCase.includes('de donde vienen')){
      this.actionProvider.whoWeAre()
    }

    if(lowerCase.includes('portafolio') || lowerCase.includes('trabajos') || lowerCase.includes('experiencia')){
      this.actionProvider.ourExperience()
    }

    if(lowerCase.includes('plan basico') || lowerCase.includes('basico')){
      this.actionProvider.handleBasicPlan()
    }

    if(lowerCase.includes('plan ejecutivo') || lowerCase.includes('ejecutivo')){
      this.actionProvider.handleExecutivePlan()
    }

    if(lowerCase.includes('plan empresarial') || lowerCase.includes('empresarial')){
      this.actionProvider.handleEnterprisePlan()
    }
  }
}

export default MessageParser;