import React from 'react'
import Slider from 'react-slick'
import { makeStyles } from '@material-ui/core/styles'
import PricesSlide from './PricesSlide'
import { Button, Container, Grid, Typography } from '@material-ui/core'
import PricesSlideFeature from './PricesSlideFeature'
import WebIcon from '@material-ui/icons/Web';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';
import TocIcon from '@material-ui/icons/Toc';
import BusinessIcon from '@material-ui/icons/Business';
import PersonIcon from '@material-ui/icons/Person';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

import { pricesFeatures } from '../generalData'

const useStyles = makeStyles( (theme) => ({
  space: {
    marginBottom: '1.5rem ',
    marginTop: '1.5rem',
    '& .MuiTypography-h4':{
      marginTop: '7rem'
    },
    '& .slick-arrow':{
      '&:before':{
        color:'black',
        fontSize: '2rem',
        [theme.breakpoints.down('sm')]:{
          display:'none'
        }
      }
    },
  },
  imageContainer: {
    display: 'flex', 
    justifyContent: 'center' 
  },
  img: {
    width: '65px',
    height:'65px'
  },
  container: {
    marginBottom: '3rem',
    marginTop: '3rem'
  },
  specialFeature:{
    borderRight: '1px solid lightgray'
  }
}))

const slides = [
  {
    title: 'Basico(CMS)',
    subtitle: 'Paquete Web',
    prevPrice: '488',
    actualPrice: '240',
    icon: <PersonIcon fontSize="large" />,
    data: [
      {
        title: 'Sitio Web Prediseñado',
        icon: <WebIcon fontSize='large'/>,
      },
      {
        title: 'Administracion de Contenido',
        icon: <TocIcon fontSize='large'/>,
      },
      {
        title: 'Galeria de Imagenes',
        icon: <PhotoLibraryIcon fontSize='large'/>,
      },
      {
        title: 'Cantidad de Imagenes max(05)',
        icon: <FileCopyIcon fontSize='large'/>,
      },
      {
        title: 'Formulario de Contacto',
        icon: <ContactMailIcon fontSize='large'/>,
      },
      {
        title: 'Slider de Imágenes',
        icon: <ViewCarouselIcon fontSize='large'/>,
      },
      {
        title: 'Diseño Responsive',
        icon:  <ImportantDevicesIcon fontSize='large'/>,
      },
      {
        title: 'Links a Redes Sociales',
        icon: <FacebookIcon fontSize='large'/>,
      },
      {
        title: 'Alta en Buscadores',
        icon:  <SearchIcon fontSize='large'/>
      },
    ]
  },
  {
    title: 'Inicial',
    subtitle: 'Paquete Web',
    prevPrice: '499',
    actualPrice: '350',
    icon: <SupervisorAccountIcon fontSize="large" />,
    data: [
      {
        title: 'Sitio Web Prediseñado (Con Plantillas)',
        icon: <WebIcon fontSize='large'/>,
      },
      {
        title: 'Administración de Contenido',
        icon: <TocIcon fontSize='large'/>,
      },
      {
        title: 'Galeria de Imagenes',
        icon: <PhotoLibraryIcon fontSize='large'/>,
      },
      {
        title: 'Cantidad de Imagenes max(07)',
        icon: <FileCopyIcon fontSize='large'/>,
      },
      {
        title: 'Formulario de Contacto',
        icon: <ContactMailIcon fontSize='large'/>,
      },
      {
        title: 'Slider de Imágenes',
        icon: <ViewCarouselIcon fontSize='large'/>,
      },
      {
        title: 'Diseño Responsive',
        icon:  <ImportantDevicesIcon fontSize='large'/>,
      },
      {
        title: 'Links a Redes Sociales',
        icon: <FacebookIcon fontSize='large'/>,
      },
      {
        title: 'Alta en Buscadores',
        icon:  <SearchIcon fontSize='large'/>
      },
    ]
  },
  {
    title: 'Profesional',
    subtitle: 'Paquete Web',
    prevPrice: '750',
    actualPrice: '600',
    icon: <BusinessCenterIcon fontSize="large" />,
    data: [
      {
        title: 'Diseño Web Personalizado (Basado en Plantilla)',
        icon: <WebIcon fontSize='large'/>,
      },
      {
        title: 'Autogestion de Contenido',
        icon: <TocIcon fontSize='large'/>,
      },
      {
        title: 'Cantidad de Páginas definidas por el Cliente',
        icon: <PhotoLibraryIcon fontSize='large'/>,
      },
      {
        title: 'Portafolio de Productos o Servicios',
        icon: <FileCopyIcon fontSize='large'/>,
      },
      {
        title: 'Galera de Imagenes',
        icon: <ContactMailIcon fonrSize="large" />
      },
      {
        title: 'Slider de Imágenes y Contenido',
        icon: <ViewCarouselIcon fontSize='large'/>,
      },
      {
        title: 'Slider de Imágenes',
        icon: <ViewCarouselIcon fontSize='large'/>,
      },
      {
        title: 'Diseño Responsive',
        icon:  <ImportantDevicesIcon fontSize='large'/>,
      },
      {
        title: 'Links a Redes Sociales',
        icon: <FacebookIcon fontSize='large'/>,
      },
      {
        title: 'Posicionamiento SEO Básico',
        icon:  <SearchIcon fontSize='large'/>
      },
      {
        title: 'Diseño Inteligente E-Marketing',
        icon: <SearchIcon fontSize="large" />
      }
    ]
  },
  {
    title: 'Empresarial',
    subtitle: 'Paquete Web',
    prevPrice: '1050',
    actualPrice: '820',
    icon: <BusinessIcon fontSize="large" />,
    data: [
      {
        title: '03 Propuestas Graficas de Diseño',
        icon: <WebIcon fontSize='large'/>,
      },
      {
        title: 'Autogestion de Contenido',
        icon: <TocIcon fontSize='large'/>,
      },
      {
        title: 'Cantidad de Páginas definidas por el Cliente',
        icon: <PhotoLibraryIcon fontSize='large'/>,
      },
      {
        title: 'Portafolio de Productos o Servicios',
        icon: <FileCopyIcon fontSize='large'/>,
      },
      {
        title: 'Galera de Imagenes',
        icon: <ContactMailIcon fonrSize="large" />
      },
      {
        title: 'Slider de Imágenes y Contenido',
        icon: <ViewCarouselIcon fontSize='large'/>,
      },
      {
        title: 'Slider de Imágenes',
        icon: <ViewCarouselIcon fontSize='large'/>,
      },
      {
        title: 'Diseño Responsive',
        icon:  <ImportantDevicesIcon fontSize='large'/>,
      },
      {
        title: 'Links a Redes Sociales',
        icon: <FacebookIcon fontSize='large'/>,
      },
      {
        title: 'Posicionamiento SEO Plus',
        icon:  <SearchIcon fontSize='large'/>
      },
      {
        title: 'Integración Google Maps',
        icon: <SearchIcon fontSize="large" />
      },
      {
        title: 'Integracion con Google Analytics',
        icon: <SearchIcon fontSize='large' />
      },
      {
        title: 'Configuracion con Google Email',
        icon: <SearchIcon fontSize="large" />
      },
      {
        title: 'Diseño Inteligente E-Marketing',
        icon: <SearchIcon fontSize="large" />
      }
    ]
  },
]


function Prices() {
  const classes = useStyles()

  const settings = {
      // className: "center",
      // centerMode: true,
      centerPadding: 0,
      dots: true,
      infinite: true,
      arrows: true,
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
    <Container maxWidth='lg' className={classes.space} id="prices">
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
        <Button variant="contained" color="primary" disabled  >
          Ecommerce
        </Button>
      </Grid>
    </Grid>

    <Slider {...settings} className={classes.space}>
      {
        slides.map((slide) => (
          <PricesSlide title={slide.title} subtitle={slide.subtitle} prevPrice={slide.prevPrice} actualPrice={slide.actualPrice} Icon={slide.icon} >
            {
              slide.data.map((data) => (
                <PricesSlideFeature title={data.title} Icon={data.icon} />
              ))
            }
          </PricesSlide>
        ))
      }
    </Slider>

      <Typography variant="h4" align='center' color="initial">
        Caracteristicas claves
      </Typography>
      <Grid 
        className={classes.container}
        container
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap='wrap'
        >
          {
            pricesFeatures.map((feature) =>(
              <Grid item xs={4} className={`${feature.special ? classes.specialFeature : '' }`}>
                <div className={classes.imageContainer}>
                  <img src={feature.img} className={classes.img} alt=""/>
                </div>
                <Typography variant="h6" color="initial" align='center'>
                  {feature.text}
                </Typography>
              </Grid>
            ))
          }
      </Grid>

    </Container>
  )
}

export default Prices
