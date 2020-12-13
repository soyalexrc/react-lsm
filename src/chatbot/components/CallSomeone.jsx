import React, { useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles ({
  modalCallContainer:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

function CallSomeone() {
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Hola!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Dejame tu nombre y tu correo electronico y te enviaremos de inmediato un correo con toda la informacion necesaria para que tomes la mejor desicion, te esperamos!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancelar
          </Button>
          <Button  href='tel:+584244507756' target="_blank"onClick={setTimeout(() => setOpen(false), 5000)} color="primary">
            Ir
          </Button>
        </DialogActions>
      </Dialog>
  )
}


export default CallSomeone