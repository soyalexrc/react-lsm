import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, IconButton, /*Link*/ } from '@material-ui/core'
import db from '../Firebase'
// import Alert from './Alert'
import { makeStyles } from '@material-ui/core/styles'
import { Send, Close, /*WhatsApp, PhoneInTalk */ } from '@material-ui/icons';
import '../index.css'


const useStyles = makeStyles((theme) => ({  
  modalHeader:{
    backgroundColor: 'lightblue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '16px'
  },
  modal: {

    '& .MuiPaper-root':{
      // overflowY: 'hidden',
      borderRadius: '33px'
    },
    '& .MuiTextField-root':{
      marginTop: '20px'
    },
    '& .MuiDialogContent-root':{
      minHeight: '396px'
    },
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
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'center'
  },
  sendButton: {
    borderRadius: '999px'
  },
  modalIcon: {
    width: '30px',
    marginTop: '35px',
    marginRight: '15px'
  },
  whatsapp:{
    color: '#25d366'
  },
  img: {
    width: '7rem',
    margin: '-1rem',
    [theme.breakpoints.down('sm')]:{
      width: '4.5rem'
    }
  }
}))

function Modal({ show, close }) {
  const classes = useStyles()
  // const [modalShow, setModalShow] = useState(true);
  const [name, setName] = useState('')
  // const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  // const [country, setCountry] = useState('')
  const [message, setMessage] = useState('')
  // const [alertMessage, setAlertMessage] = useState(null)


  const handleSubmit = async() => {
    // await setAlertMessage(null)
    // console.log('seteado a null', alertMessage)
    await db.collection('clientMessages')
    .add({
      name: name,
      // lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      // country: country,
      message: message
    })
    .then(() => {
      alert( "Su mensaje ha sido enviado con exito!")
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

    setName('')
    // setLastName('')
    setPhoneNumber('')
    setEmail('')
    // setCountry('') 
    setMessage('')

    // setModalShow(false)
    console.log('cerrando')
    
    await close()
  }
  
  return (
    <Dialog className={classes.modal} open={show} onClose={close} aria-labelledby="form-dialog-title">
    <div className={classes.modalHeader}> 
    <img className={classes.img} src="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm-assets%2Flogo-without-letters.png?alt=media&token=69e1353e-eacf-4719-a76d-2db5ef0164fa" alt="" />
    <DialogTitle  id="form-dialog-title">Hola Cibernauta,<br /> Puedo ayudarte?</DialogTitle>
    <IconButton  onClick={close}>
      <Close />
    </IconButton>
    </div>
    <DialogContent>
      <DialogContentText>
        Dejame Tus Datos
      </DialogContentText>
      <form autoComplete='off'>

        <Grid container className={classes.form} spacing={1}>
          <Grid item xs={12} >
            <img src="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fusuario.png?alt=media&token=d15ec870-8d15-4e5a-a0e8-14f42bb5f237" alt="" className={classes.modalIcon} />
            <TextField 
              id="name" 
              label="Nombres" 
              fullWidth 
              // className={classes.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          {/* <Grid item xs={12} sm={4}>
            <PersonOutline />
            <TextField 
              id="lastName" 
              label="Apellido" 
              fullWidth 
              // className={classes.input}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid> */}
          <Grid item xs={12} >
            <img src="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2FRecurso-1.png?alt=media&token=47e44a82-2c74-4ea4-824b-b3f38612c24d" alt="" className={classes.modalIcon} />
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
          <Grid item xs={12} >
            <img src="https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2FCORREO.png?alt=media&token=b07021ac-194c-4bb3-8de0-d176d7833f56" alt="" className={classes.modalIcon} />
            <TextField 
              id="email" 
              label="Email" 
              fullWidth 
              // className={classes.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <Language />
            <TextField 
              id="country" 
              label="Pais" 
              fullWidth 
              // className={classes.input}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Grid> */}
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
      {/* <Button onClick={close} color="primary"  fullWidth={true} endIcon={<Cancel/>}>
        Cancelar
      </Button> */}
      <Button onClick={handleSubmit} className={classes.sendButton} color="primary"  variant='contained' fullWidth={true} endIcon={<Send/>}>
        Enviar
      </Button>
    </DialogActions>
    {/* <DialogActions className={classes.modalActions}>
      <IconButton  onClick={() => console.log('hola')}>
        <Link href="https://wa.me/51917902604"  target="_blank">
          <WhatsApp className={classes.whatsapp} fontSize='large'/>
        </Link>
      </IconButton>
      <IconButton  onClick={() => console.log('chao')}>
        <Link href="tel:+51917902604" target="_blank">
          <PhoneInTalk fontSize='large'/>
        </Link>
      </IconButton>
    </DialogActions> */}
      {/* {alertMessage && 
      <Alert type={alertMessage.type} message={alertMessage.message} autoClose={5000} />} */}
  </Dialog>
  )
}

export default Modal
