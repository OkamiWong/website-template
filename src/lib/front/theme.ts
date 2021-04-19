import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  spacing: (factor: number) => (factor * 4),
})

export default theme
