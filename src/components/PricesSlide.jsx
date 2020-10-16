import React from 'react'
// import Button from '@material-ui/core/Button'
// import clsx from 'clsx';
import { Card, CardContent, CardHeader, IconButton ,CardMedia, Grid, Typography, Divider, ListItemText, ListItem, Button, List} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import LanguageIcon from '@material-ui/icons/Language';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ForumIcon from '@material-ui/icons/Forum';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

const useStyles = makeStyles( {
  card:{
    maxWidth: '465px',  
    // minWidth: '345px',
    margin: '8px 8px'
  },
  media: {
    height: '300px',
    // paddingTop: '56.25%', // 16:9
    position: 'relative',
    overflowY: 'scroll',
    padding: '16px'
  },
  centerContent:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  cardContent:{
    paddingRight:'52px',
    paddingLeft:'52px',
    paddingBottom: '0px!important'
  },
  verticalSpace:{
    paddingBottom:'16px',
    paddingTop: '16px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
})

function PricesSlide(props) {
  const { title, subtitle, prevPrice, actualPrice }  = props
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <LanguageIcon fontSize='large' />
        }
        title={title}
        subheader={subtitle}
        
      />  
      <CardMedia className={classes.media}>
        {/* <List className={classes.mediaContent}>
          <ListItem>
            <ListItemText primary='photos' secondary='octubre de mi nacimiento' />
          </ListItem>
        </List> */}
        {/* <Divider /> */}
        {props.children}
      </CardMedia>
      <CardContent className={classes.cardContent}>
        <Grid container>
          <Grid item xs={6} className={classes.centerContent}> 
            <AttachMoneyIcon  fontSize='large' />
            <Typography variant="h2" color="initial">
              {actualPrice}
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.centerContent}> 
            <AttachMoneyIcon fontSize='small' />
            <Typography variant="h3" color="initial">
              {prevPrice}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.verticalSpace}>
            <Button variant="contained" color="primary">
              Order now
            </Button>
          </Grid>
          <Grid item xs={6} className={classes.centerContent}> 
            <IconButton >
              <ForumIcon />
              <Typography variant='body1' color='initial'>
                Live chat
              </Typography>
            </IconButton>
          </Grid>
          <Grid item xs={6} className={classes.centerContent}> 
            <IconButton >
              <PhoneInTalkIcon />
              <Typography variant='body1' color='initial'>
              +51 917 902 604
              </Typography>
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default PricesSlide
