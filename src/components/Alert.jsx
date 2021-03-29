import React, { useState } from 'react'
import clsx from 'clsx'
import { Icon, IconButton, Snackbar, SnackbarContent } from '@material-ui/core'
// import { , , InfoIcon, WarningIcon } from '@material-ui/icons'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { amber, green } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'

//first comment

const useStyles = makeStyles(theme => ({
  success:{
    backgroundColor: green[600],
  },
  error:{
    backgroundColor: theme.palette.error.dark,
  },
  info:{
    backgroundColor: theme.palette.primary.main,
  },
  warning:{
    backgroundColor: amber[700],
  },
  icon:{
    fontSize: 20,
  },
  iconVariant:{
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message:{
    display: 'flex',
    alignItems: 'center',
  },
}))

function Alert({ type, message, autoClose }) {
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  // const handleClick = () => {
  //   setOpen(true)
  // }

  const handleClose = () => {

    setOpen(false)
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >

      <SnackbarContent
        className={clsx(classes[type])}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)}>
              {type === 'success' ? <CheckCircleIcon /> : type === 'error' ? <ErrorIcon /> : ''}
            </Icon>
            {message}
          </span>
        }
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
            <Icon className={classes.icon}>
              <CloseIcon />
            </Icon>
          </IconButton>
        ]}
      />

    </Snackbar>
  )
}

export default Alert
