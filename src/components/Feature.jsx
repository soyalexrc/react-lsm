import {  Typography, Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSpring, animated } from 'react-spring'

const useStyles = makeStyles({
  image:{
    width: '100px',
    objectFit: 'contain',
  },
  figure:{
    display: 'flex',
    justifyContent: 'center'
  },
  feature: {
    maxWidth: '270px'
  },
  title:{
    fontSize: '1.25rem',
    fontWeight: '700'
  },
  text:{
    fontSize: '1rem'
  }
})

function Feature({ title, image, description }) {
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
    transform: `scale(${ hovering ? 1.1 : 1})`,
})

  return (
    <Grid className={classes.feature} item xs={12} sm={6} md={4} lg={3}>
      <animated.div style={springStyles} onMouseEnter={ () => set(updateHover(true)) } onMouseLeave={ () => set(updateHover(false)) }>
        <figure className={classes.figure}>
          <img className={classes.image} src={image} alt={title}/>
        </figure>

        <Typography variant="h5" color="initial" align="center" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body2" color="initial" align="center" className={classes.text}>
          {description}
        </Typography>
      </animated.div>
    </Grid>
  )
}

export default Feature
