import React, { useState } from 'react'
import { AppBar, Typography, IconButton, Toolbar, Button, Avatar, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import db from '../Firebase'

const useStyles = makeStyles({
  grow: {
    flex:1
  },
  center:{
    display: 'flex',
    justifyContent: 'center',
    flex:1
  }
})

function Navbar() {
  const classes = useStyles()
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [message, setMessage] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
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
        alert('tu mensaje se envio sactisfactoriamente!')
      })
      .catch((error) => {
        alert(error.message)
      })

    setFirstName('')
    setLastName('')
    setPhoneNumber('')
    setEmail('')
    setCountry('')
    setMessage('')
    setOpen(false)
  }

  return (
    <AppBar position="sticky" className={classes.grow}>
  <Toolbar>
    <IconButton edge="start " color="inherit" aria-label="menu">
      <Typography variant="h6">
        Lsm Company
      </Typography>
    </IconButton>
    <div className={classes.center}>
      <IconButton aria-label="productos" >
        <Typography variant="body2" color="initial">Productos</Typography>
      </IconButton>
      <IconButton aria-label="productos" >
        <Typography variant="body2" color="initial">Paquetes</Typography>
      </IconButton>
      <IconButton aria-label="productos" >
        <Typography variant="body2" color="initial">Portafolio</Typography>
      </IconButton>
      <IconButton aria-label="productos" >
        <Typography variant="body2" color="initial">Sobre Nosotros</Typography>
      </IconButton>
      <IconButton aria-label="productos" >
        <Typography variant="body2" color="initial">Contactanos</Typography>
      </IconButton> 
      <IconButton aria-label="productos" >
        <Typography variant="body2" color="initial">Productos</Typography>
      </IconButton>
      
      <Button color="secondary" variant="contained" onClick={handleClickOpen}>Contratanos</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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
                  className={classes.input}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField 
                  id="lastName" 
                  label="Last Name" 
                  fullWidth 
                  className={classes.input}
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
                  className={classes.input}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  id="email" 
                  label="Email" 
                  fullWidth 
                  className={classes.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  id="country" 
                  label="Country" 
                  fullWidth 
                  className={classes.input}
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
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>

    </div>
    <div className>
      <IconButton aria-label="avatar">
      <Avatar></Avatar> 
      </IconButton>
    </div>
  </Toolbar>
</AppBar>
  )
}

export default Navbar
