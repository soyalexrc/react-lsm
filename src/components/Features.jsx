import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core/'
import Feature from './Feature'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles ({
    space: {
      marginBottom:'100px',
      marginTop:'100px'
  }
})

function Features() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.space}id="features">
      <Typography variant="h4" align='center' color="initial">
        ¿Por que elegirnos?
      </Typography>
      <Typography variant="h6" align='center' color="initial">
        Aseguramos una completa optimización de su sitio web
      </Typography>
      <Grid container justify='center' alignContent='center' alignItems='center'>
          <Feature 
            title="Analizar metas y oportunidades"
            description="Revisamos su competencia, evaluamos sus productos y servicios y diseñamos su plan de marca."
            image="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2FCampanas.png?alt=media&token=2d3cbb46-2777-4c7d-848b-388c03485d9f"
          />
          <Feature 
            title="Estrategia de diseño de sitios web interactivos"
            description="Nuestros expertos determinan la mejor estructura de sitio web para instigar un tráfico de clientela creíble a su sitio."
            image="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2FBRANDING.png?alt=media&token=f1a0bbe7-6986-4bf7-88c0-cb42578cc92f"
          />
          <Feature 
            title="Redacción de contenido / Redacción publicitaria"
            description="El contenido se verifica, organiza y optimiza para SEO para mejorar el flujo web y mejorar la calificación de búsqueda."
            image="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fpublicidad-digital.png?alt=media&token=1d9581fb-e991-4c6b-8262-df262f74e2af"
          />
          <Feature 
            title="Páginas de diseño personalizado"
            description="Cada página tiene un diseño personalizado e incluye revisiones y fotografías de archivos ilimitadas."
            image="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2FICONOpng.png?alt=media&token=26add20f-0758-4d24-bad6-44caae80f336"
          />
          <Feature 
            title="Desarrollo web responsivo"
            description="Su sitio esta desarrollado para ajustarse a diferentesños de pantalla y es compatible con todos los dispositivos y orientaciones."
            image="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2FDiseno%20web%20a%20medida.png?alt=media&token=40978bee-e4e5-4082-bf13-ba99b48986a2"
          />
          <Feature 
            title="Entrenamiento uno a uno"
            description="Su sitio web incluye una formación en profundidad sobre como editar y crear páginas. Mantenga su sitio actualizado, siempre!"
            image="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Festrategia%20de%20marketing%20digital%20png.png?alt=media&token=04090b66-2332-4955-aeec-4d5e0709926f"
          />
          <Feature 
            title="Sistema de gestión de contenido de WordPress"
            description="Incluye edición de apuntar / hacer click para actualizaciones de contenido en segundos. Edición simplificada."
            image="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Flitad.png?alt=media&token=adaade99-59ec-4688-992c-724811c4e1aa"
          />
          <Feature 
            title="Otros elementos "
            description="Lanzamos el sitio a su alojamiento e incluimos enlaces de redes sociales y fomularios de contacto."
            image="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Faudiovisual.png?alt=media&token=1ca666f9-5b85-473e-af70-374c3ae2f54f"
          />
      </Grid>
    </Container>
  )
}

export default Features
