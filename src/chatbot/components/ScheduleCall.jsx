import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import db from '../../Firebase'

const useStyles = makeStyles({
  modalCallContainer:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  countryCode: {
    maxWidth: '40px',
    marginTop: '1rem',
    marginRight: '2rem'
  },
})

function ScheduleCall() {
  const classes = useStyles()
  const [phone, setPhone] = useState('')
  const [open, setOpen] = useState(true)
  
  const handleSubmitCallModal = async() => {
    await db.collection('callbackClients')
    .add({
      phone: phone,
    })
    .then(() => {
      alert( "Su mensaje ha sido enviado con exito!")
    })
    .catch((error) => {
      alert(error.message)
    })

    setPhone('')

    await setOpen(false)
  }

  return (
    <Dialog open={open} aria-labelledby="form-dialog-title">
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
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)} color="primary">
        Cancelar
      </Button>
      <Button onClick={handleSubmitCallModal} color="primary">
        Enviar
      </Button>
    </DialogActions>
  </Dialog>
  ) 
}

export default ScheduleCall