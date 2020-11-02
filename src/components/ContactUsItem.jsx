import { Grid, IconButton, Link, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles ({
  card:{
    display: 'flex',
    justifyContent:'center',
    marginBottom: '50px'
  },
  card__right:{
    display:'flex',
    flexDirection:'column',
    paddingLeft: '8px'
  },
  border:{
    borderRight: '1px solid grey',
    paddingRight: '8px'
  },
  center: {
    textAlign:'center',
    paddingBottom:'100px'
  },
  padding:{
    paddingBottom:'50px',
  }
})

function ContactUsItem({ Icon, title, subtitle,link }) {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md="3" className={classes.card}>
      <Link href={link} target="_blank">
        <IconButton>
            <Icon fontSize='large' className={classes.border}/>
        </IconButton>
      </Link>
      <div className={classes.card__right}>
        <Typography variant="h5" color="initial">
          {title}
        </Typography>
        <Typography variant="body2" color="initial">
          {subtitle}
        </Typography>
      </div>
    </Grid>
  )
}

export default ContactUsItem
