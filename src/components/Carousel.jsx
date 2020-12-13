import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Slider from 'react-slick'
import { Grid, Typography, IconButton } from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Link } from 'react-scroll'
// import Slide from './Slide'
import { carouselData } from '../generalData'

const useStyles = makeStyles(theme =>({
  arrowIcon: {
    position: 'absolute',
    bottom: '100px',
    left: '35px',
    backgroundColor: 'black',
    color:'white',
    '&:hover' : {
      color: 'black',
      backgroundColor: 'white'
    }
  },
  slideOne:{
    backgroundImage: 'url( "https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm-assets%2Ffondo-carousel-1.jpg?alt=media&token=b5876d20-11e3-4bf4-82a4-671e0fda9692")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
  },
  slideTwo:{
    backgroundImage: 'url( "https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm-assets%2Ffondo-carousel-2.jpg?alt=media&token=b580d99b-9078-44a1-aedc-6866d3ad1b18")',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
    backgroundSize: 'cover', 
  },
  slideThree:{
    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm-assets%2Ffondo-carousel-4.jpg?alt=media&token=2edf6c89-276c-45f0-aa62-ded707d268cd")',
    height: '100vh',
    width: '100vw',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  image:{
    minWidth:'400px',
    maxWidth: '600px',
    [theme.breakpoints.down('sm')]:{
      minWidth: '300px',
      maxWidth:'330px'
    }

  },
  center:{
    display:'flex',
    justifyContent:'center'
  },
  text:{
    color: 'white',
    maxWidth: '556px',
    [theme.breakpoints.down('md')]:{
      textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]:{
      '& .MuiTypography-h3':{
        fontSize: '24px'
      },
      '& .MuiTypography-h6':{
        fontSize: '12px'
      }
    }
  },
  textBlack:{
    color: 'black',
    maxWidth: '556px',
    [theme.breakpoints.down('md')]:{
      textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]:{
      '& .MuiTypography-h3':{
        fontSize: '24px'
      },
      '& .MuiTypography-h6':{
        fontSize: '12px'
      }
    }
  }
}))




function Carousel() {
  const classes = useStyles()

  const settings ={
    dots: false,
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
    <>
      <Slider {...settings} id="hero">
        {carouselData.map((item, index) => (
          <div className={item.containerClass}>
            <Grid container alignItems='center' justify='center' alignContent='center' className={`${index === 0 ? classes.slideOne : index === 1 ? classes.slideTwo : classes.slideThree }`}>
                <Grid item xs={12} md={6}>
                    <figure className={classes.center}>
                        <img src={item.imageSrc} className={classes.image} alt=""/>
                    </figure>
                </Grid>
                <Grid item xs={12} md={6} className={classes.text}>
                    <Typography variant="h3" color="initial">
                      {item.title}
                    </Typography>
                    <Typography variant="h6" color="initial">
                      {item.text}
                    </Typography>
                </Grid>
            </Grid>
          </div>
        ))}
      </Slider>
      <Link to="services" smooth={true} duration={1000}>
        <IconButton className={classes.arrowIcon}>
          <ArrowDownwardIcon fontSize="large" />
        </IconButton>
      </Link>
    </>
    )
}

export default Carousel
