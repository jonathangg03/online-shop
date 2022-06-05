import styled from 'styled-components'
import { color, shadow, radius, font } from '../../styles/styleVariables'

const Menu = styled.ul`
  background-color: white;
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 5px 40px;
  height: 75px;
  li {
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    height: 65px;
    width: 65px;
    align-items: flex-start;
    padding-top: 20px;
    a {
      color: ${color.soft};
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .selected {
    background-color: ${color.main};
    height: 65px;
    width: 65px;
    border-radius: 999px;
    border: 6px solid white;
    transform: translateY(-25px);
    color: white;
    align-items: center;
    padding-top: 0;
    font-size: 2.3rem;
    a {
      color: white;
    }
  }
`

export { Menu }
