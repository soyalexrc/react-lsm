import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  fullView: {
    width:'100%',
    height:'80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

function Slide({ title, backgroundImg, img, description }) {
  const classes = useStyles()

  return (
    <div className={classes.fullView} >
      <Grid 
        container
        alignItems="center"
        alignContent="center"
      >
        <Grid item xs={0} sm={1} />

        < Grid item xs={12}>
        <h1>{title}</h1>
        <h4>{description}</h4>

          
        </Grid> 
        <Grid item xs={0} sm={1} />   
      </Grid>
    </div>
  )
}

export default Slide
