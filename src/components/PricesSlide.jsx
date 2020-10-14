import React from 'react'
// import Button from '@material-ui/core/Button'
// import clsx from 'clsx';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import { Collapse } from '@material-ui/core';

const useStyles = makeStyles( {
  card:{
    maxWidth: '445px',
    // minWidth: '345px',
    margin: '0px 8px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
})

function PricesSlide() {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="">
            <MoreVertIcon />
          </IconButton>
        }
        title="this is an example of a card"
        subheader="October 12, 2020"
        
      />
      <CardMedia
        className={classes.media}
        title="example 1"
        image="https://thumbs.dreamstime.com/b/example-red-tag-example-red-square-price-tag-117502755.jpg"
      />
      <CardContent>
        <Typography variant="body2" color="initial">
        This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default PricesSlide
