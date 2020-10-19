import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'

const useStyles = makeStyles ({
  mediaContent:{
    width:'100%',
    maxWidth:'360px',
    paddingTop:0,
    paddingBottom:0,
  },
  listItem:{
    paddingTop:0,
    paddingBottom:0,
  }
})

function PricesSlideFeature({ Icon, title, subtitle }) {
  const classes  = useStyles()

  return (
    <>
      <List className={classes.mediaContent}>
        <ListItem className={classes.listItem}>
          <ListItemAvatar>
            <IconButton>
              {Icon}
            </IconButton>
          </ListItemAvatar>
          <ListItemText primary={title} secondary={subtitle} />
        </ListItem>
      </List> 
      <Divider />
    </>
  )
}

export default PricesSlideFeature
