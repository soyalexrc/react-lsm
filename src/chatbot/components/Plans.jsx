import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {  ListItem, List } from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'


const useStyles = makeStyles({
  icon : {
    color: '#2898ec'
  },
  button: {
    paddingLeft: 0,
  }
})

function Plans(props) {
  const classes = useStyles()
  const plans = [
    {
      text: 'plan Inicial',
      handler: props.actionProvider.handleInitialPlan,
      id: 1
    },
    {
      text: 'plan Basico',
      handler: props.actionProvider.handleBasicPlan,
      id: 2
    },
    {
      text: 'plan Profesional',
      handler: props.actionProvider.handleProfessionalPlan,
      id: 3
    },
    {
      text: 'plan Empresarial',
      handler: props.actionProvider.handleEnterprisePlan,
      id: 3
    }
  ]

  return (
    <List component="nav" aria-label="chatbot options">
    {plans.map((plan, index) => (
          <ListItem button className={classes.button} onClick={plan.handler}>
            <ArrowRightIcon className={classes.icon}/>
          { plan.text}
          </ListItem>
    ))}
  </List>
  )
}

export default Plans
