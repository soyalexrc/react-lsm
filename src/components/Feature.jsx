import {  Typography, Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  image:{
    width: '100px',
    objectFit: 'contain',
  },
  figure:{
    display: 'flex',
    justifyContent: 'center'
  }
})

function Feature({ title, image, description }) {
  const classes = useStyles()

  return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <figure className={classes.figure}>
          <img className={classes.image} src={image} alt={title}/>
        </figure>

        <Typography variant="h5" color="initial" align="center">
          {title}
        </Typography>
        <Typography variant="body2" color="initial" align="center">
          {description}
        </Typography>
      </Grid>
  )
}

export default Feature
