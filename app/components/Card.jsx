import React from 'react'
import { Link } from 'react-router-dom'
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
    maxWidth: 450,
    margin: '20px'
  },

  location: {
    margin: '5px 0',
    fontStyle: 'italic'
  },

  description: {
    fontStyle: 'italic',
    height: 80,
    overflow: 'hidden'
  },

  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },

  link: {
    textDecoration: 'none',
    color: '#3f51b5',
    paddingLeft: '10px'
  }
}

//#TODO: truncate description by word if it's too big add ... at the end
const BusinessCard = ({ item, classes }) => {
  if (isEmpty(item)) { return (<div></div>) }
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={item.imageUrl} title={item.name} />
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
      </CardContent>
      <CardActions>
        <Link className={classes.link} to={`/details/${item.id}`}>
          Learn More
        </Link>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(BusinessCard)
