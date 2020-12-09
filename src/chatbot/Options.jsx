import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link as SmoothLink } from 'react-scroll'

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
      id: 0
    },
    {
      text: 'Enviar un Correo',
      handler: props.actionProvider.handleSendEmail,
      id: 1
    },
    {
      text: 'Ver ejemplos de trabajos',
      handler: props.actionProvider.showPortfolio,
      id: 2
    },
    {
      text: 'que tipo de servicio ofrecen?',
      handler: props.actionProvider.showServices,
      id: 3,
    },
    {
      text: 'Quiero llamar a alguien',
      handler: props.actionProvider.callSomeone,
      id: 4,
    },
    {
      text: 'Comunicarme por WhatsApp',
      handler: props.actionProvider.handleWhatsapp,
      id: 5,
    },
    {
      text: 'agendar una llamada',
      handler: props.actionProvider.shceduleCall,
      id: 6
    }
  ]

  return (
    <ButtonGroup className={classes.buttonGroup} orientation="vertical" size="small" variant="outlined" color="primary" aria-label="vertical outlined primary button group">
      {options.map((option) =>(
        <Button key={option.id}   onClick={option.handler} >
          {option.text}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default Options
