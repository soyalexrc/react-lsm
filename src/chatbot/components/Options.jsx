import React from 'react'
import { List, ListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-scroll'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles({
  icon : {
    color: '#2898ec'
  },
  button: {
    paddingLeft: 0,
  }
})

function Options(props) {
  const classes = useStyles()
  const options = [
    {
      text: 'Mas detalles sobre planes',
      handler: props.actionProvider.handleNewProduct,
      id: 0,
      link: 'prices'
    },
    {
      text: 'Enviar un Correo',
      handler: props.actionProvider.handleSendEmail,
      id: 1,
      link: 'contactUs'
    },
    {
      text: 'Ver ejemplos de trabajos',
      handler: props.actionProvider.handlePortfolio,
      id: 2,
      link: "portfolio"
    },
    {
      text: 'que tipo de servicio ofrecen?',
      handler: props.actionProvider.handleServices,
      link: 'services',
      id: 3,
      // link: null
    },
    {
      text: 'Quiero llamar a alguien',
      handler: props.actionProvider.handleCallSomeone,
      id: 4,
      link: 'contactUs'
    },
    {
      text: 'Comunicarme por WhatsApp',
      handler: props.actionProvider.handleWhatsapp,
      id: 5,
      link: 'contactUs'
    },
    {
      text: 'agendar una llamada',
      handler: props.actionProvider.handleScheduleCall,
      id: 6,
      link: 'contactUs'
    }
  ]

  return (
        // <ButtonGroup className={classes.buttonGroup} orientation="vertical" size="small" variant="outlined"color="primary" aria-label="vertical outlined primary button group">
        //   {options.map((option, index) => ([
        //     (option.link !== null) && <Link to={option.link} smooth={true} duration={1000}>
        //       {option.text}
        //     </Link>,
        //     (option.link === null) && <Button key={option.id} onClick={option.handler}>
        //       {option.text}
        //     </Button>
        //   ]))}
        // </ButtonGroup>

        <List component="nav" aria-label="chatbot options">
          {options.map((option, index) => ([
            // (option.link) && 
            //   <Link to={option.link} smooth={true} duration={1000}>
            //     <ListItem button>
            //       <ArrowRightIcon className={classes.icon} /> 
            //       {option.text}
            //     </ListItem>
            //   </Link>,
            // (!option.link) && 
            //   <ListItem button onClick={option.handler}> 
            //     <ArrowRightIcon className={classes.icon} /> 
            //     {option.text}
            //   </ListItem>,
              (option.link && option.handler) && 
              <Link to={option.link} smooth={true} duratino={1000}>
                <ListItem button className={classes.button} onClick={option.handler}>
                  <ArrowRightIcon className={classes.icon}/>
                { option.text}
                </ListItem>
              </Link>
          ]))}
        </List>
  )
}

export default Options
