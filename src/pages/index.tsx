import React from 'react'
import { Paper, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  paper: {
    marginTop: '10vw',
    marginLeft: '10vw',
    marginRight: '10vw',
    padding: '5vw',
  },
}))

export default function Index() {
  const classes = useStyles()
  return (
    <div>
      <Paper className={classes.paper} elevation={9}>
        <Typography>
          Hello, world!
        </Typography>
      </Paper>
    </div>
  )
}
