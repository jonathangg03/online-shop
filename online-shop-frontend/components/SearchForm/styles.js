import css from 'styled-jsx/css'
import { radius, shadow, color } from '../../styles/theme'

const styles = css`
  .search {
    height: 48px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  input {
    height: 100%;
    width: 82%;
    border: none;
    border-radius: ${radius.main};
    /* font-family: ${fontMain}; */
    padding: 0 10px 0 20px;
    font-size: 1.2rem;
    outline-color: ${color.main};
    box-shadow: ${shadow.main};
    color: ${color.hard};
  }

  button {
    height: 48px;
    width: 48px;
    border: none;
    background-color: ${color.main};
    border-radius: ${radius.main};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`

export default styles
