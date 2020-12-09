import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  buttonSpace : {
    maxWidth: '192px',
    marginTop: '10px',
    marginBottom:'10px'
  }
})

function Options(props) {
  const classes = useStyles()
  const options = [
    {
      text: 'Adquirir un producto',
      handler: props.actionProvider.handleNewProduct,
      id: 1
    },
    {
      text: 'Enviar un Correo',
      handler: props.actionProvider.handleSendEmail,
      id: 2
    }
  ]

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      alignContent="center"
      wrap="nowrap"
    >
      {options.map((option) =>(
        <Grid item key={option.id} >
          <Button variant="contained" color="default" onClick={option.handler} size="small" className={classes.buttonSpace}>
            {option.text}
          </Button>
        </Grid>
      ))}
    </Grid>
  )
}

export default Options
