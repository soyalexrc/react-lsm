import React from 'react'
import Slider from 'react-slick'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles ({
  one:{
    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm-assets%2Fimagen-carousel-2.png?alt=media&token=d1657e7b-24d2-4fda-af25-cec7b0802e30")',
    height: '100vh',
  },
  two:{
    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm-assets%2Fimagen-carousel.png?alt=media&token=b11d738d-8431-4116-a8d8-3dbaa3d5a017")',
    height: '100vh',
  },
  three:{
    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Ffoto%20de%20fondo1.svg?alt=media&token=7780bfcc-ad1d-4376-9b64-19c776f9e4a9")',
    height: '100vh',
  }
})

function Prueba() {
  const classes = useStyles()

const settings ={
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

  return (
    <div>
      <h1>este es un ejemplo</h1>
      <Slider {...settings}>
      <div className={classes.one}>
          <div className="oneLeft">
            <img src="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimg-carousel-3.png?alt=media&token=79b4b777-661d-4020-af3f-e6bd8940ed97" alt=""/>
          </div>
          <div className="oneRight">
            <h1>texto uno</h1>
            <p>descripcion uno</p>
          </div>
      </div>
      <div className={classes.two}>2</div>
      <div className={classes.three}>3</div>
      </Slider>
    </div>
  )
}

export default Prueba
