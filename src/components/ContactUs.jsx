import React from 'react'
import { Container, Grid, Typography, IconButton } from '@material-ui/core'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import { makeStyles } from '@material-ui/core/styles'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles ({
  card__left:{
    display: 'flex',
  },
  card__right:{
    display:'flex',
    flexDirection:'column',
    paddingLeft: '8px'
  },
  border:{
    borderRight: '1px solid grey',
    paddingRight: '8px'
  },
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
        <Grid item xs={12} sm={6} md="3">
          <IconButton>
            <div className={classes.card__left}>
              <PhoneInTalkIcon fontSize='large' className={classes.border}/>
            </div>
            <div className={classes.card__right}>
              <Typography variant="h5" color="initial">
                Sin costo
              </Typography>
              <Typography variant="body2" color="initial">
                +58 424 422 8420
              </Typography>
            </div>
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={6} md="3">
          <IconButton >
            <div className={classes.card__left}>
              <PhoneAndroidIcon fontSize='large' className={classes.border}/>
            </div>
            <div className={classes.card__right}>
              <Typography variant="h5" color="initial">
                Solicitar
              </Typography>
              <Typography variant="body2" color="initial">
                Llamada de vuelta
              </Typography>
            </div>
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={6} md="3">
          <IconButton >
            <div className={classes.card__left}>
              <MailOutlineIcon fontSize='large' className={classes.border}/>
            </div>
            <div className={classes.card__right}>
              <Typography variant="h5" color="initial">
                Enviar un correo 
              </Typography>
              <Typography variant="body2" color="initial">
                lmsbusiness@gmail.com
              </Typography>
            </div>
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={6} md="3">
          <IconButton >
            <div className={classes.card__left}>
              <ChatIcon fontSize='large' className={classes.border}/>
            </div>
            <div className={classes.card__right}>
              <Typography variant="h5" color="initial">
                Empezar un 
              </Typography>
              <Typography variant="body2" color="initial">
                chat en vivo
              </Typography>
            </div>
          </IconButton>
        </Grid>
      </Grid>
    </Container>
    </>
  )
}

export default ContactUs
