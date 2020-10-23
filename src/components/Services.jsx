import React, { useState } from 'react'
import Service from './Service'
import { Tab, Tabs, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  tabs:{
    flexWrap: 'wrap'
  }
})

function Services() {
  const classes = useStyles()
  const [selectedTab, setSelectedTab] = useState(0)
  
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
  }
  return (
    <>
      <AppBar position="static" color="primary">
        <Tabs value={selectedTab} centered={true} onChange={handleChange} aria-label="services tabs" className={classes.tabs}>
          <Tab label="Sitios Web Responsive" />         
          <Tab label="Ecommerce" />         
          <Tab label="Sitios Web CMS" />         
          <Tab label="Portales B2B" />         
        </Tabs>
      </AppBar>
      {selectedTab === 0 &&
        <Service 
          title="Sitios web creativos y adaptativos"
          subtitle="Aumente sus ingresos anuales con un diseño web adaptable"
          text="Los sitios web adaptativos lo ayudarán a llegar a una audiencia en una proporción mucho mejor que los sitios web típicos. Las personas ahora realizan casi el 90% de sus actividades diarias a través de sus teléfonos inteligentes y tabletas. Estos dispositivos tienen varias resoluciones de tamaño de pantalla, lo que lleva a la necesidad de tener sitios web con dimensiones de pantalla flexibles." 
          image="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-4.png?alt=media&token=0b8f2c8c-c8e6-494f-ba2b-058a89ad297d"
        />
      }
      {selectedTab === 1 &&
        <Service 
          title="Diseño y desarrollo web de comercio electrónico"
          text="En LSM Company, no solo creamos sitios web de comercio electrónico. Le brindamos una solucion en linea completa con el objetivo principal de duplicar sus ingresos anuales. Nuestro objetivo es brindarle a su empresa la exposición en linea y el reconocimiento de marca que lo ayudarán a lograr mayores conversiones que conduzcan a ventas rentables."
          image="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-5.png?alt=media&token=7b39e9eb-90e9-4669-b227-4167262fbd32"
        />
      }
      {selectedTab === 2 &&
        <Service 
          title="Potentes sitios web de CMS"
          subtitle="Tome el control de su sitio web con un CMS robusto."
          text="Los sistemas de administración de contenido (CMS) le brindan a usted, el propietario del dominio, el control total de su sitio web. Con un CMS sólido, puede cargar, descargar, editar y manipular datos de la manera que desee. Al ser una plataforma flexible, también puede integrar funciones adicionales en el sitio cuando sea necesario. En LSM Company, creamos sitios web CMS con el único objetivo de ayudar a los propietarios de negocios a administrar y mantener su sitio sin preocupaciones. "
          image="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-6.png?alt=media&token=2952eb6f-5d17-4a1e-a046-f3b77ec0d0b3" 
        />
      }
      {selectedTab === 3 &&
        <Service 
          title="Desarrollo de portal web B2B"
          subtitle="Portales robustos para organizaciones que prestan servicios a clientes comerciales"
          text="Los portales B2B estan diseñados para brindar soporte de comercio electrónico. En LSM Company, ayudamos a las organizaciones a anunciar e introducir sus productos y servicios a otras empresas de todo el mundo. Nuestras habilidades en el desarrollo de aplicacines web y la gestión empresarial nos brindan la ventaja para crear portales B2B de alta calidad, dedicados a aumentar la productividad y mejorar las operaciones comerciales."
          image="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fimagen-7.png?alt=media&token=621f019e-bd1a-4bb1-92a3-1259d5de67f0" 
        />
      }
    </>
  )
}

export default Services
