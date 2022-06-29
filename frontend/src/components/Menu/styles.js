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
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  li {
    display: flex;
    justify-content: center;
    height: 65px;
    width: 65px;
    align-items: flex-start;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    button {
      transition: 0.3s;
      font-size: 1.8rem;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
      color: ${color.soft};
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background-color: transparent;
      cursor: pointer;
      background: none;
      /* seletion: none; */
    }
  }

  li:first-child button {
    font-size: 2.4rem;
  }

  li:last-child button {
    font-size: 2.1rem;
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
    button {
      color: white;
    }
  }
`

export { Menu }
