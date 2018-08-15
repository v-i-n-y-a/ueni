import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    border: '1px solid grey',
    height: '60px',
    width: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px'
  },

  title: {
    margin: 0
  }
}
const Header = ({ logo, title, classes }) => (
  <header className={classes.header}>
    <div className={classes.logo}>
      <Typography variant="headline" component="h1">{logo}</Typography>
    </div>
    <Typography className={classes.title} gutterBottom variant="headline" component="h1">
      {title}
    </Typography>
  </header>
)

export default withStyles(styles)(Header)
