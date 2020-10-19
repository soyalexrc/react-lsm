import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField } from '@material-ui/core'
import db from '../Firebase'
import Alert from './Alert'
// import { makeStyles } from '@material-ui/core/styles'

// const useStyles = makeStyles({
  
// })

function Modal({ show, close }) {
  // const [modalShow, setModalShow] = useState(true);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [message, setMessage] = useState('')
  const [alertMessage, setAlertMessage] = useState(null)


  const handleSubmit = () => {
    setAlertMessage(null)
    db.collection('clientMessages')
    .add({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      country: country,
      message: message
    })
    .then(() => {
      // alert('tu mensaje se envio sactisfactoriamente!')
      setAlertMessage({
        type: 'success',
        message: 'Excelente!, tu mensaje se envio. Te contactaremos en breve'
      })
    })
      .catch((error) => {
        // alert(error.message)
        setAlertMessage({
          type: 'error',
          message: error.message
        })
      })

    setFirstName('')
    setLastName('')
    setPhoneNumber('')
    setEmail('')
    setCountry('')
    setMessage('')

    // setModalShow(false)
    close()
  }
  
  return (
    <Dialog open={show} onClose={close} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Dejanos tus datos y tus comentarios!</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Lorem ipsum Dolorum Botas del DolorXD, dejanos tus dudas o alguna idea que tengas para desarrollar una app  y con gusto te ayudaremos de la manera mas eficaz y eficiente posible
      </DialogContentText>
      <form noValidate autoComplete='off'>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <TextField 
              id="firstName" 
              label="First Name" 
              fullWidth 
              // className={classes.input}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField 
              id="lastName" 
              label="Last Name" 
              fullWidth 
              // className={classes.input}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField 
              id="phoneNumber" 
              label="Phone Number" 
              type="number" 
              fullWidth 
              // className={classes.input}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
            <TextField 
              id="country" 
              label="Country" 
              fullWidth 
              // className={classes.input}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Grid>
        </Grid>

        <TextField
          id="message"
          label="Message"
          multiline
          fullWidth
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </DialogContent>
    <DialogActions>
      <Button onClick={close} color="primary">
        Cancel
      </Button>
      <Button onClick={handleSubmit} color="primary">
        Send
      </Button>
    </DialogActions>
      {alertMessage && 
      <Alert type={alertMessage.type} message={alertMessage.message} autoClose={5000} />}
  </Dialog>
  )
}

export default Modal
