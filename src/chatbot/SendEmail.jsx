import React, { useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import db from '../Firebase'

const useStyles = makeStyles ({
  modalCallContainer:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

function SendEmail() {
  const classes = useStyles()
  const [open, setOpen] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmitMailModal = async() => {
    await db.collection('requestClientsMail')
    .add({
      email: email,
      name: name,
    })
    .then(() => {
      alert( "Te hemos enviado un correo!, por favor revisa tu bandeja de entrada")
    })
    .catch((error) => {
      alert(error.message)
    })

    setName('')
    setEmail('')
    
    await setOpen(false)
    // await handleCloseMailModal()
  }
  return (
    <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Hola!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Dejame tu nombre y tu correo electronico y te enviaremos de inmediato un correo con toda la informacion necesaria para que tomes la mejor desicion, te esperamos!
          </DialogContentText>
          <div className={classes.modalMailContainer}>
            <TextField
              // className={}
              autoFocus
              margin="dense"
              id="name"
              label="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSubmitMailModal} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
  )
}


export default SendEmail
