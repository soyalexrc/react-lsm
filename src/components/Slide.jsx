import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  image:{
    minWidth:'400px',
    maxWidth: '600px'
  },
  slide:{
    height: '85vh'
  },
  center:{
    display:'flex',
    justifyContent:'center'
  },
  text:{
    [theme.breakpoints.down('md')]:{
      textAlign: 'center'
    }
  }
}))

function Slide({ title, img, description, backgroundImage }) {
  const classes = useStyles()

  return (
      <Grid container alignItems='center' justify='center' alignContent='center'className={classes.slide} style={{ backgroundimage:{backgroundImage} }}>
          <Grid item xs={12} md={6}>
            <figure className={classes.center}>
              <img className={classes.image} src={img} alt={title}/>
            </figure>
          </Grid>
          <Grid item xs={12} md={6} className={classes.text}>
            <Typography variant="h3" color="initial">
              {title}
            </Typography>
            <Typography variant="h6" color="initial">
              {description}
            </Typography>
          </Grid>
      </Grid>
  )
}

export default Slide
