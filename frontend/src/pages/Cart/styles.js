import styled from 'styled-components'
import { color, radius, font } from '../../styles/styleVariables'

const BuyButton = styled.button`
  width: 100%;
  height: 45px;
  background-color: ${color.main};
  border: none;
  cursor: pointer;
  color: white;
  font-family: ${font.main};
  border-radius: ${radius.main};
`

const Title = styled.h5`
  font-size: 1.4rem;
  font-weight: 500;
  color: gray;
`

export { BuyButton, Title }
