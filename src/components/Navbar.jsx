import React, { useState } from 'react'
import { AppBar, Typography, IconButton, Toolbar, Button, Hidden, Container, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Menu, Inbox } from '@material-ui/icons'
import Modal from './Modal'


const useStyles = makeStyles({
  grow: {
    flex:1
  },
  navbarRight:{
    display: 'flex',
    justifyContent: 'flex-end',
    flex:1
  },
  menuIcon: {
    color: 'white'
  },
  drawer: {
    width: '100%',
    minWidth: '260px',
  },
  text: {
    color: 'white'
  }
})

function Navbar() {
  const classes = useStyles()
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)

  const showModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const handleDrawer = () => {
    setOpen(true)
  }

  

  return (
    <AppBar position="sticky" className={classes.grow}>
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Typography variant="h6">
              Lsm Company
            </Typography>
          </IconButton>
          <div className={classes.navbarRight}>
            <Hidden smDown>
              <IconButton aria-label="productos" >
                <Typography variant="body2" className={classes.text}>Productos</Typography>
              </IconButton>
              <IconButton aria-label="productos" >
                <Typography variant="body2" className={classes.text}>Paquetes</Typography>
              </IconButton>
              <IconButton aria-label="productos" >
                <Typography variant="body2" className={classes.text}>Portafolio</Typography>
              </IconButton>
              <IconButton aria-label="productos" >
                <Typography variant="body2" className={classes.text}>Sobre Nosotros</Typography>
              </IconButton>
              <IconButton aria-label="productos" >
                <Typography variant="body2" className={classes.text}>Contactanos</Typography>
              </IconButton> 
              
              <Button color="secondary" variant="contained" onClick={showModal}>Contratanos</Button>
              <Modal show={show} close={closeModal}/>
            </Hidden>
            <Hidden mdUp>
              <IconButton onClick={handleDrawer} >
                <Menu className={classes.menuIcon} />
              </IconButton>
            </Hidden>

            <Drawer
              variant="temporary"
              anchor="right"
              open={open}
              onClose={() => setOpen(false)}
            >
              <div className={classes.drawer}>
                <List component='nav'>
                  <ListItem button>
                    <ListItemIcon>
                      <Inbox />
                    </ListItemIcon>
                    <ListItemText primary="Productos" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <Inbox />
                    </ListItemIcon>
                    <ListItemText primary="Paquetes" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <Inbox />
                    </ListItemIcon>
                    <ListItemText primary="Portafolio" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <Inbox />
                    </ListItemIcon>
                    <ListItemText primary="Sobre Nosotros" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <Inbox />
                    </ListItemIcon>
                    <ListItemText primary="Contactanos" />
                  </ListItem>
                  <ListItem button>
                    <Button variant="contained" color="secondary">
                      Contratanos
                    </Button>
                  </ListItem>
                </List>
              </div>
            </Drawer>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
