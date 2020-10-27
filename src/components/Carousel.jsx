import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Slider from 'react-slick'
import { Grid, Typography } from '@material-ui/core'
// import Slide from './Slide'

const useStyles = makeStyles(theme =>({
  space:{
    marginBottom: '48px',
    backgroundImage: 'url("https://www.publicdomainpictures.net/pictures/60000/velka/chevrons-stripe-colorful-background-1381350087B52.jpg")',
    backgroundRepeat: 'no-repeat',
    height: '88vh',
  },
  slideOne:{
    // backgroundImage: 'url("https://www.publicdomainpictures.net/pictures/60000/velka/chevrons-stripe-colorful-background-1381350087B52.jpg")',
    height: '85vh',
    width: '100vw'
    // backgroundRepeat: 'no-repeat',
    // objectFit: 'contain',
    // maxwidth: '100%'
  },
  slideTwo:{
    // backgroundImage: 'url("https://www.publicdomainpictures.net/pictures/60000/velka/chevrons-stripe-colorful-background-1381350087B52.jpg")',
    height: '85vh',
    width: '100vw'
    // backgroundRepeat: 'no-repeat',
    // objectFit: 'cover',
    // width: '100vw'
  },
  slideThree:{
    // backgroundImage: 'url("https://www.publicdomainpictures.net/pictures/60000/velka/chevrons-stripe-colorful-background-1381350087B52.jpg")',
    height: '85vh',
    width: '100vw'
    // backgroundRepeat: 'no-repeat',
    // objectFit: 'cover',
    // width: '100vw'
  },
  image:{
    minWidth:'400px',
    maxWidth: '600px'
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

function Carousel() {
  const classes = useStyles()
  const settings ={
    dots: true,
    infinite: true,
    slidesToShow:1,
    slidesToScroll:1,
    arrows:false,
    fade: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear"
  }

  return (
      <Slider {...settings} className={classes.space}>
        <div className={classes.slideOne}>
          <Grid container alignItems='center' justify='center' alignContent='center'className={classes.slideOne}>
            <Grid item xs={12} md={6}>
              <figure className={classes.center}>
                <img className={classes.image} src="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-carousel-1.png?alt=media&token=bf37c2b6-3792-4b59-b062-c08e4b79cc0b" alt=""/>
              </figure>
            </Grid>
            <Grid item xs={12} md={6} className={classes.text}>
              <Typography variant="h3" color="initial">
              Professional Web Design & Web Development
              </Typography>
              <Typography variant="h6" color="initial">
              We leverage the strengths of each and every platform to build incredible solutions across apple devices iPhone, iPad, Apple Watch, and android devices. 
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.slideTwo}>
          <Grid container alignItems='center' justify='center' alignContent='center'className={classes.slideOne}>
            <Grid item xs={12} md={6}>
              <figure className={classes.center}>
                <img className={classes.image} src="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-car-carousel-1.png?alt=media&token=b95fb856-c076-4e58-88b2-0d2b7cc29ec8" alt=""/>
              </figure>
            </Grid>
            <Grid item xs={12} md={6} className={classes.text}>
              <Typography variant="h3" color="initial">
              Next Level Web Design & Development
              </Typography>
              <Typography variant="h6" color="initial">
              Our dedicated team of design and technology experts partner with you every step of the way of digital innovation independence.
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.slideThree}>
          s<Grid container alignItems='center' justify='center' alignContent='center'className={classes.slideOne}>
            <Grid item xs={12} md={6}>
              <figure className={classes.center}>
                <img className={classes.image} src="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimg-carousel-3.png?alt=media&token=79b4b777-661d-4020-af3f-e6bd8940ed97" alt=""/>
              </figure>
            </Grid>
            <Grid item xs={12} md={6} className={classes.text}>
              <Typography variant="h3" color="initial">
              70% Increase In Convertion Rate
              </Typography>
              <Typography variant="h6" color="initial">
              Effortlessly capture leads, build customer relationships and accept payments right from your website.
              </Typography>
            </Grid>
          </Grid>
        </div>
        {/* <Slide
          img="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-carousel-1.png?alt=media&token=bf37c2b6-3792-4b59-b062-c08e4b79cc0b"
          title="Professional Web Design & Web Development"
          description="We leverage the strengths of each and every platform to build incredible solutions across apple devices iPhone, iPad, Apple Watch, and android devices. "
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
        /> */}
      </Slider>
    )
}

export default Carousel
