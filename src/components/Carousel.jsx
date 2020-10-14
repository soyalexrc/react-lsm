import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Slider from 'react-slick'
import Slide from './Slide'

const useStyles = makeStyles({
  space:{
    marginBottom: '48px'
  }
})


function Carousel() {
  const classes = useStyles()
  const settings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll:1,
    arrows:false
  }

  return (
      <Slider {...settings} className={classes.space}>
        <Slide
          title="Creative - Clean - Responsive"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
        />
        <Slide 
          title="this is a title i dont know what to say"
          description="aklsdklasmdklasmdklsmldml"
        />
        <Slide 
          title="third title please god give me ideas"
          description="al;smd;lask;dlaks;ldka;lskdkalskd;laklsdkas;ld"
        />
      </Slider>
    )
}

export default Carousel
