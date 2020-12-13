import React from 'react'
import { Button, ButtonGroup, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  buttonGroup : {
    display: 'flex'
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
      link: null
    },
    {
      text: 'Ver ejemplos de trabajos',
      handler: props.actionProvider.showPortfolio,
      id: 2,
      link: null
    },
    {
      text: 'que tipo de servicio ofrecen?',
      handler: props.actionProvider.showServices,
      id: 3,
      link: null
    },
    {
      text: 'Quiero llamar a alguien',
      handler: props.actionProvider.callSomeone,
      id: 4,
      link: null
    },
    {
      text: 'Comunicarme por WhatsApp',
      handler: props.actionProvider.handleWhatsapp,
      id: 5,
      link: null
    },
    {
      text: 'agendar una llamada',
      handler: props.actionProvider.shceduleCall,
      id: 6,
      link: null
    }
  ]

  return (
        <ButtonGroup className={classes.buttonGroup} orientation="vertical" size="small" variant="outlined"
                     color="primary" aria-label="vertical outlined primary button group">
          {options.map((option, index) => ([
            (option.link !== null) && <Link to={option.link} smoth={true} duration={1000}>
              {option.text}
            </Link>,
            (option.link === null) && <Button key={option.id} onClick={option.handler}>
              {option.text}
            </Button>
          ]))}
        </ButtonGroup>
  )
}

export default Options
