import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  image:{
    maxWidth: '700px'
  },
  imageContainer:{
    display: 'flex',
    justifyContent: 'center'
  },
  serviceContainer:{
    marginTop:'80px',
    marginBottom:'150px'
  }
})

function Service({ title, subtitle, text, image }) {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.serviceContainer}>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="space-around"
        alignItems="center"
        alignContent="center"
      >

        <Grid item xs={12} md={6}>
          <Typography variant="h3" align="center" color="initial">{title}</Typography>
          <Typography variant="h5" align="center" color="initial">{subtitle}</Typography>
          <Typography variant="body1" align="center" color="initial">{text}</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
        <figure className={classes.imageContainer}>
          <img 
            className={classes.image}
            src={image}
            alt={title}
          />
        </figure>
        </Grid>

        
      </Grid>
    </Container>
  )
}

export default Service
