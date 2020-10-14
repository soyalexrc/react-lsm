import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  buttonSpace : {
    maxWidth: '192px',
    marginTop: '10px',
    marginBottom:'10px'
  }
})

function Plans(props) {
  const classes = useStyles()
  const plans = [
    {
      text: 'plan basico',
      handler: props.actionProvider.handleBasicPlan,
      id: 1
    },
    {
      text: 'plan ejecutivo',
      handler: props.actionProvider.handleExecutivePlan,
      id: 2
    },
    {
      text: 'plan empresarial',
      handler: props.actionProvider.handleEnterprisePlan,
      id: 3
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
      {plans.map((plan) =>(
        <Grid item key={plan.id} >
          <Button variant="contained" color="default" onClick={plan.handler} size="small" className={classes.buttonSpace}>
            {plan.text}
          </Button>
        </Grid>
      ))}
    </Grid>
  )
}

export default Plans
