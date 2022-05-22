import styled from 'styled-jsx/css'
import { color } from '../../styles/theme'

const globals = styled.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #f8f8f8;
    min-height: 100vh;
    padding: 15px 15px 100px;
    color: ${color.hard};
  }

  html {
    font-size: 62.5%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

const styles = styled`
`

export { globals, styles }
