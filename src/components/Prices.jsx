import React from 'react'
import Slider from 'react-slick'
import { makeStyles } from '@material-ui/core/styles'
import PricesSlide from './PricesSlide'
import { Button, Container, Grid, Typography } from '@material-ui/core'
import PricesSlideFeature from './PricesSlideFeature'

const useStyles = makeStyles({
  space: {
    marginBottom: '50px ',
    marginTop: '50px',
  }
})

function Prices() {
  const classes = useStyles()

  const settings = {
      className: "center",
      centerMode: true,
      centerPadding: 0,
      dots: true,
      infinite: true,
      arrows:false,
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
      <PricesSlide title='Basic' subtitle='Website Package' prevPrice='99' actualPrice='999' >
        <PricesSlideFeature featureTitle='photos' />
        <PricesSlideFeature featureTitle='photos' />
        <PricesSlideFeature featureTitle='photos' />
        <PricesSlideFeature featureTitle='photos' />
        <PricesSlideFeature featureTitle='photos' />
        <PricesSlideFeature featureTitle='photos' />
        <PricesSlideFeature featureTitle='photos' />
        <PricesSlideFeature featureTitle='photos' />
      </PricesSlide>
      <PricesSlide title='StartUp' subtitle='Website Package' prevPrice='99' actualPrice='999'  />
      <PricesSlide title='Professional' subtitle='Website Package' prevPrice='99' actualPrice='999'  />
      <PricesSlide title='Elite' subtitle='Website Package' prevPrice='99' actualPrice='999'  />
      <PricesSlide title='Corporate' subtitle='Website Package' prevPrice='99' actualPrice='999'  />
      <PricesSlide title='Business' subtitle='Website Package' prevPrice='99' actualPrice='999'  />
    </Slider>
    </Container>
  )
}

export default Prices
