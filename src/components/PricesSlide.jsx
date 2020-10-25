import React from 'react'
import { useSpring, animated } from 'react-spring'
// import Button from '@material-ui/core/Button'
// import clsx from 'clsx';
import { Card, CardContent, CardHeader, IconButton ,CardMedia, Grid, Typography, Button} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import LanguageIcon from '@material-ui/icons/Language';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ForumIcon from '@material-ui/icons/Forum';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';


const useStyles = makeStyles( {
  card:{
    maxWidth: '340px',  
    // minWidth: '345px',
    marginTop: '50px',
    marginBottom: '50px',
    marginRight: '24px',
    marginLeft: '24px'
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
    paddingRight:'32px',
    paddingLeft:'32px',
    paddingBottom: '0px!important'
  },
  verticalSpace:{
    paddingBottom:'16px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  prevPrice:{
    textDecoration: 'line-through',
    color: 'grey'
  }
})


function PricesSlide(props) {
  const { title, subtitle, prevPrice, actualPrice }  = props
  const classes = useStyles()
  const [springStyles, set] = useSpring(() => ({
    transform: 'scale(1)',
    from: { 
        transform: 'scale(0.5)',
    },
    config: { tension: 400, mass: 2, velocity: 5 }
}))

// Updated value generator
const updateHover = hovering => ({
    transform: `scale(${ hovering ? 1.1 : 1})`
})

  return (
    <animated.div style={springStyles} onMouseEnter={ () => set(updateHover(true)) } onMouseLeave={ () => set(updateHover(false)) }>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <LanguageIcon fontSize='large' />
          }
          title={title}
          subheader={subtitle}
          
        />  
        <CardMedia className={classes.media}>
          
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
              <Typography variant="h5" color="initial" className={classes.prevPrice}>
                {prevPrice}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.verticalSpace}>
              <Button variant="contained" color="primary">
                Order now
              </Button>
            </Grid>
            <Grid item xs={6} className={classes.centerContent}> 
              <IconButton>
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
    </animated.div>
  )
}

export default PricesSlide
