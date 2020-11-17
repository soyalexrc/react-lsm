import React, { useState } from 'react'
// import Service from './Service'
import { Tab, Tabs, AppBar, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AdjustOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  tabs:{
    flexWrap: 'wrap'
  },
  image:{
    maxWidth: '700px',
    [theme.breakpoints.down('sm')]:{
      maxWidth: '330px'
    }
  },
  imageContainer:{
    display: 'flex',
    justifyContent: 'center'
  },
  serviceContainer:{
    marginTop:'80px',
    marginBottom:'3rem'
  },
  featuresContainer:{
    textAlign: 'center'
  },
  features: {
    '& > p' : {
      display: 'flex',
      justifyContent: 'center',
      fontWeight: '700'
    },
    '& .MuiSvgIcon-root' : {
      marginRight: '10px',
      color: '#f44336 '
    }
  },
  text:{
    fontSize: '1rem',
    fontWeight:'300'
  },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: '300'
  },
  title:{
    fontSize: '2.5rem',
    fontWeight: '700'
  }
}))

function Services() {
  const classes = useStyles()
  const [selectedTab, setSelectedTab] = useState(0)
  
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
  }
  return (
    <>
      <AppBar position="static" color="primary" id="services">
        <Tabs value={selectedTab} c onChange={handleChange} variant="scrollable"  aria-label="services tabs" className={classes.tabs}>
          <Tab label="Sitios Web Responsive" />         
          <Tab label="Ecommerce" />         
          <Tab label="Sitios Web CMS" />         
          <Tab label="Portales B2B" />         
        </Tabs>
      </AppBar>
      {selectedTab === 0 &&
        // <Service 
        //   title="Sitios web creativos y adaptativos"
        //   subtitle="Aumente sus ingresos anuales con un diseño web adaptable"
        //   text="Los sitios web adaptativos lo ayudarán a llegar a una audiencia en una proporción mucho mejor que los sitios web típicos. Las personas ahora realizan casi el 90% de sus actividades diarias a través de sus teléfonos inteligentes y tabletas. Estos dispositivos tienen varias resoluciones de tamaño de pantalla, lo que lleva a la necesidad de tener sitios web con dimensiones de pantalla flexibles." 
        //   image="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-4.png?alt=media&token=0b8f2c8c-c8e6-494f-ba2b-058a89ad297d"
        // />
        <Container maxWidth="lg" className={classes.serviceContainer}>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="space-around"
            alignItems="center"
            alignContent="center"
          >
        <Grid item xs={12} md={6}>
        <figure className={classes.imageContainer}>
          <img 
            className={classes.image}
            src="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-4.png?alt=media&token=0b8f2c8c-c8e6-494f-ba2b-058a89ad297d"
            alt=''
          />
        </figure>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography  className={classes.title} variant="h3" align="center" color="initial">Sitios web creativos y adaptativos</Typography>
          <Typography  className={classes.subtitle} variant="h5" align="center" color="initial">Aumente sus ingresos anuales con un diseño web adaptable</Typography>
          <Typography className={classes.text} variant="body1" align="center" color="initial">Los sitios web adaptativos lo ayudarán a llegar a una audiencia en una proporción mucho mejor que los sitios web típicos. Las personas ahora realizan casi el 90% de sus actividades diarias a través de sus teléfonos inteligentes y tabletas. Estos dispositivos tienen varias resoluciones de tamaño de pantalla, lo que lleva a la necesidad de tener sitios web con dimensiones de pantalla flexibles.
          </Typography>

          <Grid 
          className={classes.featuresContainer}
          container 
          spacing={1}
          direction="row"
          justify="space-around"
          alignItems="center"
          alignContent="center"
          >

            <Grid item xs={6} className={classes.features}>
              <p> <AdjustOutlined /> Implementación web flexible</p>
              <p> <AdjustOutlined />  Codigo adaptable de estilo CSS3</p>
              <p> <AdjustOutlined />  Alteracion de diseño</p>
            </Grid>
            <Grid item xs={6} className={classes.features}>
              <p> <AdjustOutlined />  Full responsive</p>
              <p> <AdjustOutlined />  ambio de tamaño dinámico</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
      }
      {selectedTab === 1 &&
        // <Service 
        //   title="Diseño y desarrollo web de comercio electrónico"
        //   text="En LSM Company, no solo creamos sitios web de comercio electrónico. Le brindamos una solucion en linea completa con el objetivo principal de duplicar sus ingresos anuales. Nuestro objetivo es brindarle a su empresa la exposición en linea y el reconocimiento de marca que lo ayudarán a lograr mayores conversiones que conduzcan a ventas rentables."
        //   image="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-5.png?alt=media&token=7b39e9eb-90e9-4669-b227-4167262fbd32"
        // />
        <Container maxWidth="lg" className={classes.serviceContainer}>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="space-around"
          alignItems="center"
          alignContent="center"
        >
      <Grid item xs={12} md={6}>
      <figure className={classes.imageContainer}>
        <img 
          className={classes.image}
          src="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-5.png?alt=media&token=7b39e9eb-90e9-4669-b227-4167262fbd32"
          alt=''
        />
      </figure>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography  className={classes.title} variant="h3" align="center" color="initial">Diseño y desarrollo web de comercio electrónico</Typography>
        <Typography className={classes.text} variant="body1" align="center" color="initial">En LSM Company, no solo creamos sitios web de comercio electrónico. Le brindamos una solucion en linea completa con el objetivo principal de duplicar sus ingresos anuales. Nuestro objetivo es brindarle a su empresa la exposición en linea y el reconocimiento de marca que lo ayudarán a lograr mayores conversiones que conduzcan a ventas rentables.
        </Typography>

        <Grid 
        className={classes.featuresContainer}
        container 
        spacing={1}
        direction="row"
        justify="space-around"
        alignItems="center"
        alignContent="center"
        >

          <Grid item xs={6} className={classes.features}>
            <p> <AdjustOutlined /> Integración comercial</p>
            <p> <AdjustOutlined />  Productos y categorías</p>
            <p> <AdjustOutlined />  Reportes de productos </p>
            <p> <AdjustOutlined />  Carrito de compras  </p>
          </Grid>
          <Grid item xs={6} className={classes.features}>
            <p> <AdjustOutlined />  Sistema de gestión de contenidos</p>
            <p> <AdjustOutlined />  Registro de clientes</p>
            <p> <AdjustOutlined />  integración de pagos</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
      }
      {selectedTab === 2 &&
        // <Service 
        //   title="Potentes sitios web de CMS"
        //   subtitle="Tome el control de su sitio web con un CMS robusto."
        //   text="Los sistemas de administración de contenido (CMS) le brindan a usted, el propietario del dominio, el control total de su sitio web. Con un CMS sólido, puede cargar, descargar, editar y manipular datos de la manera que desee. Al ser una plataforma flexible, también puede integrar funciones adicionales en el sitio cuando sea necesario. En LSM Company, creamos sitios web CMS con el único objetivo de ayudar a los propietarios de negocios a administrar y mantener su sitio sin preocupaciones. "
        //   image="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-6.png?alt=media&token=2952eb6f-5d17-4a1e-a046-f3b77ec0d0b3" 
        // />
        <Container maxWidth="lg" className={classes.serviceContainer}>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="space-around"
          alignItems="center"
          alignContent="center"
        >
      <Grid item xs={12} md={6}>
      <figure className={classes.imageContainer}>
        <img 
          className={classes.image}
          src="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-6.png?alt=media&token=2952eb6f-5d17-4a1e-a046-f3b77ec0d0b3"
          alt=''
        />
      </figure>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography  className={classes.title} variant="h3" align="center" color="initial">Potentes sitios web de CMS</Typography>
        <Typography  className={classes.subtitle} variant="h5" align="center" color="initial">Tome el control de su sitio web con un CMS robusto.</Typography>
        <Typography className={classes.text} variant="body1" align="center" color="initial">Los sistemas de administración de contenido (CMS) le brindan a usted, el propietario del dominio, el control total de su sitio web. Con un CMS sólido, puede cargar, descargar, editar y manipular datos de la manera que desee. Al ser una plataforma flexible, también puede integrar funciones adicionales en el sitio cuando sea necesario. En LSM Company, creamos sitios web CMS con el único objetivo de ayudar a los propietarios de negocios a administrar y mantener su sitio sin preocupaciones.
        </Typography>

        <Grid 
        className={classes.featuresContainer}
        container 
        spacing={1}
        direction="row"
        justify="space-around"
        alignItems="center"
        alignContent="center"
        >

          <Grid item xs={6} className={classes.features}>
            <p> <AdjustOutlined /> Wordpress</p>
            <p> <AdjustOutlined />  Joomia</p>
          </Grid>
          <Grid item xs={6} className={classes.features}>
            <p> <AdjustOutlined />  Drupal</p>
            <p> <AdjustOutlined />  Otros</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
      }
      {selectedTab === 3 &&
        // <Service 
        //   title="Desarrollo de portal web B2B"
        //   subtitle="Portales robustos para organizaciones que prestan servicios a clientes comerciales"
        //   text="Los portales B2B estan diseñados para brindar soporte de comercio electrónico. En LSM Company, ayudamos a las organizaciones a anunciar e introducir sus productos y servicios a otras empresas de todo el mundo. Nuestras habilidades en el desarrollo de aplicacines web y la gestión empresarial nos brindan la ventaja para crear portales B2B de alta calidad, dedicados a aumentar la productividad y mejorar las operaciones comerciales."
        //   image="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-7.png?alt=media&token=621f019e-bd1a-4bb1-92a3-1259d5de67f0" 
        // />
        <Container maxWidth="lg" className={classes.serviceContainer}>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="space-around"
          alignItems="center"
          alignContent="center"
        >
      <Grid item xs={12} md={6}>
      <figure className={classes.imageContainer}>
        <img 
          className={classes.image}
          src="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-7.png?alt=media&token=621f019e-bd1a-4bb1-92a3-1259d5de67f0"
          alt=''
        />
      </figure>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography  className={classes.title} variant="h3" align="center" color="initial">Desarrollo de portal web B2B</Typography>
        <Typography  className={classes.subtitle} variant="h5" align="center" color="initial">Portales robustos para organizaciones que prestan servicios a clientes comerciales</Typography>
        <Typography className={classes.text} variant="body1" align="center" color="initial">Los portales B2B estan diseñados para brindar soporte de comercio electrónico. En LSM Company, ayudamos a las organizaciones a anunciar e introducir sus productos y servicios a otras empresas de todo el mundo. Nuestras habilidades en el desarrollo de aplicacines web y la gestión empresarial nos brindan la ventaja para crear portales B2B de alta calidad, dedicados a aumentar la productividad y mejorar las operaciones comerciales.
        </Typography>

        <Grid 
        className={classes.featuresContainer}
        container 
        spacing={1}
        direction="row"
        justify="space-around"
        alignItems="center"
        alignContent="center"
        >

          <Grid item xs={6} className={classes.features}>
            <p> <AdjustOutlined /> Portales de bienes y raíces</p>
            <p> <AdjustOutlined />  Portales de empleo y contratación</p>
            <p> <AdjustOutlined />  Administración de educación </p>
          </Grid>
          <Grid item xs={6} className={classes.features}>
            <p> <AdjustOutlined />  Sistema de venta de entradas en línea</p>
            <p> <AdjustOutlined />  Portales de gestión de nóminas</p>
            <p> <AdjustOutlined />  Gestión de viajes y excursiones</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
      }
    </>
  )
}

export default Services
