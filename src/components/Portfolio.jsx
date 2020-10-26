import React from 'react'
import Container from '@material-ui/core/Container'
import { GridList, GridListTile, Typography, Grid, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container:{
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
    },
  },
  image:{
    objectFit:'contain',
    borderRadius: '999px',
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
  })

const tileData = [
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fpribcess.png?alt=media&token=b32de831-66af-4be8-ad64-fd17c7739eee',
    title: 'PrettyPrincess.com',
    cols: 1,
    id: 1
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2FLugbrand.png?alt=media&token=092dab48-2c8b-44b2-a9cc-152acf967c8e',
    title: 'Lugbrand.com',
    cols: 1,
    id: 2
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fgrupo%20de%20ingenieros.png?alt=media&token=6455a5e4-8c31-4e46-9a5d-4733c94d69be',
    title: 'GrupodeIngenieros.com',
    cols: 1,
    id: 3
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fgrupo%20kiel.png?alt=media&token=c9227274-66a7-4bb0-862e-78e1e45f242a',
    title: 'GrupoKiel.com',
    cols: 1,
    id: 4
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fnutripharma.png?alt=media&token=66e8a78d-dcb2-4863-8757-05f73deb5d21',
    title: 'NutriPharmasac.com',
    cols: 1,
    id: 5
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fcredix.png?alt=media&token=436895a2-ea0d-4aac-99fa-16d5a739ebb7',
    title: 'Credix.com',
    cols: 1,
    id :6
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fvanesaduran.png?alt=media&token=07c7ecd0-17cb-4346-90c1-2482730345de',
    title: 'VanessaDuran.com',
    cols: 1,
    id: 7
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fprwireless.png?alt=media&token=cd379257-01b5-44ae-ba25-1288f9f937e1',
    title: 'Prwireless.com',
    cols: 1,
    id: 8
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/lsm-1-46b3d.appspot.com/o/lsm%2Fopenmobile.png?alt=media&token=6a6e5e3d-22c9-41a3-8fd9-b4ce343e73fc',
    title: 'OpenMobile.com',
    cols: 1,
    id: 9
  },
  
]

function Portfolio() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container justify='center'>
      <Typography variant="h4" align='center' color="initial" style={{ paddingTop: '50px', paddingBottom:'50px' }} >
          Un vistazo a nuestro galardonado portafolio de sitios web     
        </Typography>
      <GridList cellHeight={300} cols={3} className={classes.gridList}>
        {tileData.map((tile) => (
          <Grid item xs={12} sm={6} md={4} key={tile.id}> 
            <GridListTile cols={tile.cols || 1} className={classes.gridTile}>
              <Typography variant="h6" color="secondaryText" align="center">
                {tile.title}
              </Typography>
              <IconButton>
                <img src={tile.image} alt={tile.title} className={classes.image} />
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
