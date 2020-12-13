import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core/'
import Feature from './Feature'
import { makeStyles } from '@material-ui/core/styles'
import { featuresData } from '../generalData'

const useStyles = makeStyles ({ 
    space: {
      marginBottom:'100px',
      marginTop:'100px'
  }
})

function Features() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.space}id="features">
      <Typography variant="h4" align='center' color="initial">
        ¿Por que elegirnos?
      </Typography>
      <Typography variant="h6" align='center' color="initial">
        Aseguramos una completa optimización de su sitio web
      </Typography>
      <Grid container justify='center' alignContent='center' alignItems='center'>

            {featuresData.map((item) => (
              <Feature title={item.title} description={item.description} image={item.image}/>
            ))} 
      </Grid>
    </Container>
  )
}

export default Features
