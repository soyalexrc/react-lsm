import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Slider from 'react-slick'
import { Grid, Typography, IconButton } from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Link } from 'react-scroll'
// import Slide from './Slide'

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
        <div className={classes.slideOne}>
          <Grid container alignItems='center' justify='center' alignContent='center'className={classes.slideOne}>
            <Grid item xs={12} md={6}>
              <figure className={classes.center}>
                <img className={classes.image} src="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-carousel-1.png?alt=media&token=bf37c2b6-3792-4b59-b062-c08e4b79cc0b" alt=""/>
              </figure>
            </Grid>
            <Grid item xs={12} md={6} className={classes.text}>
              <Typography variant="h3" color="initial">
              Diseño web profesional y desarrollo web
              </Typography>
              <Typography variant="h6" color="initial">
              Aprovechamos las fortalezas de todas y cada una de las plataformas para crear soluciones increíbles en dispositivos Apple iPhone, iPad, Apple Watch y dispositivos Android.
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.slideTwo}>
          <Grid container alignItems='center' justify='center' alignContent='center' className={classes.slideTwo}>
            <Grid item xs={12} md={6}>
              <figure className={classes.center}>
                <img className={classes.image} src="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-car-carousel-1.png?alt=media&token=b95fb856-c076-4e58-88b2-0d2b7cc29ec8" alt=""/>
              </figure>
            </Grid>
            <Grid item xs={12} md={6} className={classes.text}>
              <Typography variant="h3" color="initial">
              Diseño y desarrollo web de siguiente nivel
              </Typography>
              <Typography variant="h6" color="initial">
              Nuestro dedicado equipo de expertos en diseño y tecnología se asocia con usted en cada paso del camino hacia la independencia de la innovación digital.
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.slideThree}>
          <Grid container alignItems='center' justify='center' alignContent='center'className={classes.slideThree}>
            <Grid item xs={12} md={6}>
              <figure className={classes.center}>
                <img className={classes.image} src="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimg-carousel-3.png?alt=media&token=79b4b777-661d-4020-af3f-e6bd8940ed97" alt=""/>
              </figure>
            </Grid>
            <Grid item xs={12} md={6} className={classes.textBlack}>
              <Typography variant="h3" color="initial">
              70% de aumento en la tasa de conversión
              </Typography>
              <Typography variant="h6" color="initial">
              Capte clientes potenciales sin esfuerzo, establezca relaciones con los clientes y acepte pagos directamente desde su sitio web.
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
      <Link to="services" smooth={true} duration={1000}>
        <IconButton className={classes.arrowIcon}>
          <ArrowDownwardIcon fontSize="large" />
        </IconButton>
      </Link>
    </>
    )
}

export default Carousel
