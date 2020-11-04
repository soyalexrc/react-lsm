import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Avatar } from '@material-ui/core'
import db from '../Firebase'
// import Alert from './Alert'
import { makeStyles } from '@material-ui/core/styles'
import { Cancel, Send, Person, Email, PhoneAndroid, PersonOutline, Language } from '@material-ui/icons';

const useStyles = makeStyles({  
  modalHeader:{
    backgroundColor: 'lightblue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '16px'
  },
  modal: {
    '& .MuiPaper-root':{
      borderRadius: '33px'
    },
    '& .MuiTextField-root':{
      marginTop: '20px'
    }
  },
  modalFooter:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '16px'
  },
  form:{
    '& .MuiGrid-item':{
      display: 'flex',
      alignItems: 'center',
      '& .MuiSvgIcon-root':{
        paddingRight: '8px',
        marginTop: '30px',
        fontSize: '40px'
      }
    }
  }
})

function Modal({ show, close }) {
  const classes = useStyles()
  // const [modalShow, setModalShow] = useState(true);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [message, setMessage] = useState('')
  // const [alertMessage, setAlertMessage] = useState(null)


  const handleSubmit = async() => {
    // await setAlertMessage(null)
    // console.log('seteado a null', alertMessage)
    await db.collection('clientMessages')
    .add({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      country: country,
      message: message
    })
    .then(() => {
      alert('tu mensaje se envio sactisfactoriamente!')
      // setAlertMessage({
      //   type: 'success',
      //   message: 'Excelente!, tu mensaje se envio. Te contactaremos en breve'
      // })
      // console.log('seteado a success', alertMessage)
    })
      .catch((error) => {
        alert(error.message)
        // setAlertMessage({
        //   type: 'error',
        //   message: error.message
        // })
      })

    setFirstName('')
    setLastName('')
    setPhoneNumber('')
    setEmail('')
    setCountry('')
    setMessage('')

    // setModalShow(false)
    console.log('cerrando')
    
    await close()
  }
  
  return (
    <Dialog className={classes.modal} open={show} onClose={close} aria-labelledby="form-dialog-title">
    <div className={classes.modalHeader}> 
    <Avatar />
    <DialogTitle  id="form-dialog-title">Hola Cibernauta, Puedo ayudarte?</DialogTitle>
    </div>
    <DialogContent>
      <DialogContentText>
        Dejame Tus Datos
      </DialogContentText>
      <form autoComplete='off'>

        <Grid container className={classes.form} spacing={1}>
          <Grid item xs={12} sm={4}>
            <Person />
            <TextField 
              id="firstName" 
              label="Nombre" 
              fullWidth 
              // className={classes.input}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PersonOutline />
            <TextField 
              id="lastName" 
              label="Apellido" 
              fullWidth 
              // className={classes.input}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PhoneAndroid />
            <TextField 
              id="phoneNumber" 
              label="Telefono" 
              type="number" 
              fullWidth 
              // className={classes.input}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Email />
            <TextField 
              id="email" 
              label="Email" 
              fullWidth 
              // className={classes.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Language />
            <TextField 
              id="country" 
              label="Pais" 
              fullWidth 
              // className={classes.input}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Grid>
        </Grid>

        <TextField
          id="message"
          label="Mensaje"
          multiline
          fullWidth
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </DialogContent>
    <DialogActions className={classes.modalFooter}>
      <Button onClick={close} color="primary"  fullWidth={true} endIcon={<Cancel/>}>
        Cancelar
      </Button>
      <Button onClick={handleSubmit} color="primary"  fullWidth={true} endIcon={<Send/>}>
        Enviar
      </Button>
    </DialogActions>
      {/* {alertMessage && 
      <Alert type={alertMessage.type} message={alertMessage.message} autoClose={5000} />} */}
  </Dialog>
  )
}

export default Modal
