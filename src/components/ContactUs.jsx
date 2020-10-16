import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import { makeStyles } from '@material-ui/core/styles'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ChatIcon from '@material-ui/icons/Chat';
import ContactUsItem from './ContactUsItem';

const useStyles = makeStyles ({
  center: {
    textAlign:'center',
    paddingBottom:'100px'
  },
  padding:{
    paddingBottom:'50px',
  }
})


function ContactUs() {
  const classes = useStyles() 
  return (
    <>
    <Container maxWidth="md" className={classes.padding}>
      <Typography variant="h4" align='center' color="initial" className={classes.padding}>
        Conéctese con nosotros para obtener una cotización personalizada en su proyecto web hoy!
      </Typography>
      <Typography variant="h6" align='center' color="initial" >
        Si esta interesado en hablar con nuestro representante de atención al cliente sobre un próximo proyecto, ll´menos de inmediato. Conéctemos y aclaremos sus interrogantes de una vez por todas.
      </Typography>
      </Container>
      <Container maxWidth='lg' className={classes.center}>
      <Grid container justify='center' alignItems='center'>
        <ContactUsItem title="Sin costo " subtitle="+58 424 422 8420" Icon={PhoneInTalkIcon} />
        <ContactUsItem title="Solicitar " subtitle="Llamada de vuelta" Icon={PhoneAndroidIcon} />
        <ContactUsItem title="Enviar un correo a " subtitle="lsmbusiness@gmail.com" Icon={MailOutlineIcon} />
        <ContactUsItem title="Empezar un" subtitle="Chat en vivo" Icon={ChatIcon} />
      </Grid>
    </Container>
    </>
  )
}

export default ContactUs
