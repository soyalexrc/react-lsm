import React, { useState } from 'react'
import { AppBar, Typography, IconButton, Toolbar, Button, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Modal from './Modal'


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
  const [show, setShow] = useState(false)

  const showModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  

  return (
    <AppBar position="sticky" className={classes.grow}>
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
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
      
      <Button color="secondary" variant="contained" onClick={showModal}>Contratanos</Button>
      <Modal show={show} close={closeModal}/>
    </div>
    <div>
      <IconButton aria-label="avatar">
      <Avatar></Avatar> 
      </IconButton>
    </div>
  </Toolbar>
</AppBar>
  )
}

export default Navbar
