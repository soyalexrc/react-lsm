import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, ButtonGroup } from '@material-ui/core'


const useStyles = makeStyles({
  buttonGroup : {
    display: 'flex'
  }
})

function Plans(props) {
  const classes = useStyles()
  const plans = [
    {
      text: 'plan Basico',
      handler: props.actionProvider.handleBasicPlan,
      id: 1
    },
    {
      text: 'plan Inicial',
      handler: props.actionProvider.handleExecutivePlan,
      id: 2
    },
    {
      text: 'plan Profesional',
      handler: props.actionProvider.handleEnterprisePlan,
      id: 3
    },
    {
      text: 'plan Empresarial',
      handler: props.actionProvider.handleEnterprisePlan,
      id: 3
    }
  ]

  return (
    <ButtonGroup className={classes.buttonGroup} orientation="vertical" size="small" variant="outlined" color="primary" aria-label="vertical outlined primary button group">
      {plans.map((plan) =>(
        <Button key={plan.id} onClick={plan.handler} >
          {plan.text}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default Plans
