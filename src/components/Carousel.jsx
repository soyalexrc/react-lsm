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
          img="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-carousel-1.png?alt=media&token=bf37c2b6-3792-4b59-b062-c08e4b79cc0b"
          title="Professional Web Design & Web Development"
          description="We leverage the strengths of each and every platform to build incredible solutions across apple devices iPhone, iPad, Apple Watch, and android devices. "
          backgroundImage="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&w=1000&q=80"
          />
        <Slide 
          img="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-car-carousel-1.png?alt=media&token=b95fb856-c076-4e58-88b2-0d2b7cc29ec8"
          title="Next Level Web Design & Development"
          description="Our dedicated team of design and technology experts partner with you every step of the way of digital innovation independence. "
        />
        <Slide 
          img="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimg-carousel-3.png?alt=media&token=79b4b777-661d-4020-af3f-e6bd8940ed97"
          title="70% Increase In Convertion Rate"
          description="Effortlessly capture leads, build customer relationships and accept payments right from your website. "
        />
      </Slider>
    )
}

export default Carousel
