import React from 'react'
import Container from '@material-ui/core/Container'
import { GridList, GridListTile, Typography, Grid, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import  { portfolioData } from '../generalData'

const useStyles = makeStyles((theme) => ({
  container:{
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom:'100px',
    marginTop:'100px',
    '& .MuiGrid-item' : {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        '& .MuiButton-root':{
          display: 'block'
        }
      },
      '& .MuiButton-root':{
        display: 'none',
        position: 'absolute',
        top: '50%',
        left: '28%',
        zIndex: 99,
      },
    }
  },
  image:{
    objectFit:'contain',
    borderRadius: '999px',
    [theme.breakpoints.down('sm')]:{
      maxWidth: '280px'
    }
  },
  space:{
    paddingBottom:'50px',
    paddingTop: '50px'
  },
  imageContainer:{
    borderRadius: '999px',
    maxWidth: '350px',
    maxHeight: '230px',
    posotion: 'relative',
    },
    gridList: {
      padding: '12px',
      overflow: 'hidden'
    },
  }))



function Portfolio() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.container} id="portfolio">
      <Grid container justify='center'>
      <Typography variant="h4" align='center' color="initial" style={{ paddingTop: '50px', paddingBottom:'50px' }} >
          Un vistazo a nuestro galardonado portafolio de sitios web     
        </Typography>
      <GridList cellHeight={300} cols={3} className={classes.gridList}>
        {portfolioData.map((data) => (
          <Grid item xs={12} sm={6} md={4} key={data.id}> 
            <GridListTile cols={data.cols || 1} className={classes.gridTile}>
              <Typography variant="h6" color="textSecondary" align="center">
                {data.title}
              </Typography>
              <IconButton onClick={() => window.open(data.url)}>
                <img src={data.image} alt={data.title} className={classes.image} />
              </IconButton>
            </GridListTile>
          </Grid>
        ))}
      </GridList>
      </Grid>
    </Container>
  )
}

export default Portfolio
