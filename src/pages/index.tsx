import React from 'react'
import { Paper, makeStyles } from '@material-ui/core'
import { ForumTwoTone } from '@material-ui/icons'

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
      <Paper className={`${classes.paper} bg-gradient-to-br from-green-400 to-cyan-500`} elevation={3}>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <ForumTwoTone className="h-12 w-12" />
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
      </Paper>
    </div>
  )
}
