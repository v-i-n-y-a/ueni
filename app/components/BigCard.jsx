import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import { withStyles } from '@material-ui/core/styles'
import isEmpty from 'lodash/isEmpty'

//Using material-ui framework for responsive
const styles = {
  card: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row'
  },

  location: {
    margin: '5px 0',
    fontStyle: 'italic'
  },

  description: {
    fontStyle: 'italic'
  },

  media: {
    margin: 20,
    flex: 1
  },

  content: {
    flex: 1
  },

  img: {
    width: '100%',
    minWidth: 250
  },

  link: {
    textDecoration: 'none',
    color: '#3f51b5',
    paddingLeft: '10px'
  },

  rating: {
    marginTop: 20,
    fontStyle: 'italic'
  },

  category: {
    fontStyle: 'italic'
  }
}

//#TODO: truncate description by word if it's too big add ... at the end
const BusinessCard = ({ item, classes }) => {

  if (isEmpty(item)) { return (<div></div>) }
  return (
    <Card className={classes.card}>
      <picture className={classes.media}>
        <img className={classes.img} src={item.imageUrl} />
      </picture>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {item.name}
        </Typography>
        <Typography component="p" className={classes.location}>
          {item.city}, {item.country}
        </Typography>
        <Typography component="p" className={classes.description}>
          {item.description}
        </Typography>
        <Typography component="p" className={classes.rating}>
          Rating: {item.score}
        </Typography>
        <Typography component="p" className={classes.category}>
          Category: {item.category}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(BusinessCard)
