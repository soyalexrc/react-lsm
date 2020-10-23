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
      <PricesSlide title='Basico(CMS)' subtitle='Paquete web' prevPrice='488' actualPrice='240'>
        <PricesSlideFeature title='Sitio Web Prediseñado' Icon={<WebIcon fontSize='large'/>} />
        <PricesSlideFeature title='Administración de Contenido' Icon={<TocIcon fontSize='large'/>} />
        <PricesSlideFeature title='Galería de Imágenes' Icon={<PhotoLibraryIcon fontSize='large'/>}  />
        <PricesSlideFeature title='Cantidad de Páginas (Max 05)' Icon={<FileCopyIcon fontSize='large'/>} />
        <PricesSlideFeature title='Formulario de Contacto' Icon={<ContactMailIcon fontSize='large'/>} />
        <PricesSlideFeature title='Slider de Imágenes' Icon={<ViewCarouselIcon fontSize='large'/>} />
        <PricesSlideFeature title='Diseño Responsive' Icon={<ImportantDevicesIcon fontSize='large'/>} />
        <PricesSlideFeature title='Links a Redes Sociales' Icon={<FacebookIcon fontSize='large'/>} />
        <PricesSlideFeature title='Alta en Buscadores' Icon={<SearchIcon fontSize='large'/>} />
      </PricesSlide>

      <PricesSlide title='Inicial' subtitle='Paquete web' prevPrice='499' actualPrice='350'>
        <PricesSlideFeature title='Sitio Web Prediseñado (Con Plantillas)' Icon={<WebIcon fontSize='large'/>} />
        <PricesSlideFeature title='Administración de Contenido' Icon={<TocIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Galería de Imágenes' Icon={<PhotoLibraryIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Cantidad de Páginas (Max 07)' Icon={<FileCopyIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Formulario de Contacto' Icon={<ContactMailIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Slider de Imágenes' Icon={<ViewCarouselIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Diseño Responsive' Icon={<ImportantDevicesIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Links a Redes Sociales' Icon={<FacebookIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Alta en Buscadores' Icon={<SearchIcon fontSize='large'/>}/>
      </PricesSlide>

      <PricesSlide title='Profesional' subtitle='Paquete web' prevPrice='750' actualPrice='600'>
        <PricesSlideFeature title='Diseño Web Personalizado (Basado en Plantilla)' Icon={<WebIcon fontSize='large'/>} />
        <PricesSlideFeature title='Autogestión de Contenido' Icon={<TocIcon />}/>
        <PricesSlideFeature title='Cantidad de Páginas definidas por el Cliente' Icon={<PhotoLibraryIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Portafolio de Productos o Servicios' Icon={<FileCopyIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Galería de Imágenes' Icon={<ContactMailIcon />}/>
        <PricesSlideFeature title='Slider de Imágenes y Contenido' Icon={<ViewCarouselIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Diseño Responsive' Icon={<ImportantDevicesIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Integracion a Redes Sociales' Icon={<FacebookIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Posicionamiento SEO Básico' Icon={<SearchIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Diseño Inteligente E-Marketing' Icon={<SearchIcon fontSize='large'/>}/>
      </PricesSlide>

      <PricesSlide title='Empresarial' subtitle='Paquete web' prevPrice='1050' actualPrice='820'>
        <PricesSlideFeature title='03 Propuestas Gráficas de Diseño' Icon={<WebIcon fontSize='large'/>} />
        <PricesSlideFeature title='Autogestión de Contenido' Icon={<TocIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Cantidad de Páginas definidas por el Cliente' Icon={<PhotoLibraryIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Portafolio de Productos o Servicios' Icon={<FileCopyIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Galería de Imágenes' Icon={<ContactMailIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Slider de Imágenes y Contenido' Icon={<ViewCarouselIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Diseño Responsive' Icon={<ImportantDevicesIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Integracion a Redes Sociales' Icon={<FacebookIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Posicionamiento SEO Básico Plus' Icon={<SearchIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Diseño Inteligente E-Marketing' Icon={<SearchIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Integración Google Maps' Icon={<SearchIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Integración Google Analytics' Icon={<SearchIcon fontSize='large'/>}/>
        <PricesSlideFeature title='Configuración Google Email ' Icon={<SearchIcon fontSize='large'/>}/>
      </PricesSlide>

    
      
    </Slider>
    </Container>
  )
}

export default Prices
