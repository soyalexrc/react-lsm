import React from 'react'
import Slider from 'react-slick'
import { makeStyles } from '@material-ui/core/styles'
import PricesSlide from './PricesSlide'
import { Button, Container, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  space: {
    marginBottom: '50px ',
    marginTop: '50px',
  }
})

function Prices() {
  const classes = useStyles()

  const settings = {
      // className: "center",
      // centerMode: true,
      dots: true,
      infinite: true,
      arrows:'true',
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}

  return (
    <Container maxWidth='lg' className={classes.space}>
      <Typography variant="h4" align='center' color="initial">
        Paquetes de sitios web cuidadosamente diseñados para empresas nuevas y existentes
      </Typography>
      <Typography variant="h6" align='center' color="initial">
        Brindamos opciones de diseño altamente flexibles y asequibles
      </Typography>

    <Grid container justify='center' spacing={6} alignContent='center' alignItems='center' className={classes.space}>
      <Grid item>
      <Button variant="contained" color="primary">
          Sitios Web CMS
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary">
          Ecommerce
        </Button>
      </Grid>
    </Grid>

    <Slider {...settings} className={classes.space}>
      <PricesSlide />
      <PricesSlide />
      <PricesSlide />
      <PricesSlide />
      <PricesSlide />
      <PricesSlide />
    </Slider>
    </Container>
  )
}

export default Prices
