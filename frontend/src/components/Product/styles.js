import styled, { css } from 'styled-components'
import { color, shadow, radius } from '../../styles/styleVariables'

const selectColor = (props) => {
  let color
  switch (props.color) {
    case 0:
      color = color.main
      break
    case 1:
      color = 'black'
      break
    case 2:
      color = 'blue'
      break
    case 3:
      color = 'green'
      break
    case 4:
      color = 'yellow'
      break
    case 5:
      color = 'pink'
      break
    case 6:
      color = 'purple'
      break
    case 7:
      color = 'gray'
      break
    case 8:
      color = 'lightblue'
      break
    case 9:
      color = 'red'
      break
  }
  return color
}

const Product = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  background-color: white;
  border-radius: ${radius.main};
  box-shadow: ${shadow.main};
  position: relative;

  a {
    color: initial;
    text-decoration: none;
    img {
      width: 100%;
      height: 132.5px;
      margin-bottom: 5px;
      object-fit: contain;
    }

    h5 {
      font-size: 1.8rem;
      font-weight: 600;
      padding-bottom: 5px;
    }

    p {
      font-size: 1.2rem;
      padding-bottom: 5px;
      color: gray;
    }

    h6 {
      font-size: 1.2rem;
      font-weight: 300;
    }

    .new {
      background-color: ${color.main};
      width: 50px;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 999px;
      height: 10px;
      position: absolute;
      color: white;
      font-weight: 400;
      height: 20px;
      top: 10px;
      left: 8px;
    }
  }
  .colors {
    display: flex;
    justify-content: space-evenly;
    margin-top: 5px;
  }
`

const ColorButton = styled.button`
  border: 1px solid ${color.soft};
  width: 30px;
  height: 30px;
  border-radius: 99px;
  border: 4px solid white;
  outline: 2px solid white;
  background-color: ${(props) => selectColor(props)};
  transition: 0.2s;

  ${(props) =>
    props.selected &&
    `
    outline-color: ${color.main};
  `}
`

export { Product, ColorButton }
