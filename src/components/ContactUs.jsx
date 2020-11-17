import React, { useState } from 'react'
import { Container, Grid, Typography, Link, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Chat, MailOutline, PhoneAndroid, PhoneInTalk } from '@material-ui/icons'
import db from '../Firebase'

const useStyles = makeStyles ((theme) => ({
  center: {
    textAlign:'center',
    paddingBottom:'100px'
  },
  padding:{
    paddingBottom:'50px',
    fontSize:'2.5rem',
    fontWeight: '700',
    [theme.breakpoints.down('sm')]:{

      fontSize: '1.75rem'
    }
  },
  card:{
    display: 'flex',
    justifyContent:'center',
    marginBottom: '50px',
    '&:hover':{
      '& .MuiIconButton-root':{
        color: 'green'
    }
    }
  },
  card__right:{
    display:'flex',
    flexDirection:'column',
    paddingLeft: '8px'
  },  
  border:{
    borderRight: '1px solid grey',
    paddingRight: '8px',
    fontSize: '3rem',
  },
  modalContainer:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  countryCode: {
    maxWidth: '40px',
    marginTop: '1rem',
    marginRight: '2rem'
  },
  text:{
    fontSize: '1.25rem',
    fontWeight: '300',
    [theme.breakpoints.down('sm')]:{
      fontSize: '1rem'
    }
  }

}))

function ContactUs() {
  const classes = useStyles() 
  const [ open, setOpen ] = useState(false)
  const [ phoneNumber, setPhoneNumber ] = useState('')

  const handleOpenModal = () => {
    setOpen(true)
  }
  
  const handleCloseModal = () => {
    setOpen(false)
  }

  const handleSubmit = async() => {
    await db.collection('callbackClients')
    .add({
      phoneNumber: phoneNumber,
    })
    .then(() => {
      alert( "Su mensaje ha sido enviado con exito!")
    })
    .catch((error) => {
      alert(error.message)
    })

    setPhoneNumber('')

    await handleCloseModal()
  }

  return (
    <>
    <Container maxWidth="md" className={classes.padding} id="contactUs">
      <Typography variant="h4" align='center' color="initial" className={classes.padding}>
        Conéctese con nosotros para obtener una cotización personalizada en su proyecto web hoy!
      </Typography>
      <Typography variant="h6" align='center' color="initial" className={classes.text} >
        Si esta interesado en hablar con nuestro representante de atención al cliente sobre un próximo proyecto, contactenos de inmediato. Conéctemos y aclaremos sus interrogantes de una vez por todas.
      </Typography>
      </Container>
      <Container maxWidth='lg' className={classes.center}>
        
      <Grid container justify='center' alignItems='center'>
        <Grid item xs={12} sm={6} md={3} className={classes.card}>
          <Link href="tel:+51917902604" target="_blank">
            <IconButton>
                <PhoneInTalk fontSize='large' className={classes.border}/>
            </IconButton>
          </Link>
          <div className={classes.card__right}>
            <Typography variant="h5" color="initial">
              Sin costo
            </Typography>
            <Typography variant="body2" color="initial">
              +58 424 422 8420
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.card}>
            <IconButton onClick={handleOpenModal}>
                <PhoneAndroid fontSize='large' className={classes.border}/>
            </IconButton>
          <div className={classes.card__right}>
            <Typography variant="h5" color="initial">
              Solicitar
            </Typography>
            <Typography variant="body2" color="initial">
              Llamada de vuelta
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.card}>
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=lsmbusiness@gmail.com" target="_blank">
            <IconButton>
                <MailOutline fontSize='large' className={classes.border}/>
            </IconButton>
          </Link>
          <div className={classes.card__right}>
            <Typography variant="h5" color="initial">
              Enviar un correo a
            </Typography>
            <Typography variant="body2" color="initial">
              lsmbusiness@gmail.com
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.card}>
            <IconButton>
                <Chat fontSize='large' className={classes.border}/>
            </IconButton>
          <div className={classes.card__right}>
            <Typography variant="h5" color="initial">
              Empezar un
            </Typography>
            <Typography variant="body2" color="initial">
              Chat en vivo
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
    <Dialog open={open} onClose={handleCloseModal} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Hola!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor dejanos tu numero de celular junto con el codigo de tu pais para ponernos en contacto lo mas pronto posible contigo!
          </DialogContentText>
          <div className={classes.modalContainer}>
            <TextField
              className={classes.countryCode}
              disabled
              id="standard-disaibled"
              defaultValue='+58'
            />
            <TextField
              autoFocus
              margin="dense"
              id="callbackPhoneNumber"
              label="Numero de Telefono"
              type="number"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ContactUs
