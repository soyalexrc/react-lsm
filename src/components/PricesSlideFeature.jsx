import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core'

const useStyles = makeStyles ({
  mediaContent:{
    width:'100%',
    maxWidth:'360px'
  },
})

function PricesSlideFeature({ featureIcon, featureTitle, featureSubtitle }) {
  const classes  = useStyles()
  return (
    <>
      <List className={classes.mediaContent}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              {featureIcon}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={featureTitle} secondary={featureSubtitle} />
        </ListItem>
      </List> 
      <Divider />
    </>
  )
}

export default PricesSlideFeature
