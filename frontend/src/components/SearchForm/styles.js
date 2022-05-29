import styled from 'styled-components'
import { color, shadow, radius, font } from '../../styles/styleVariables'

const Search = styled.form`
  height: 48px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const Input = styled.input`
  height: 100%;
  width: 82%;
  border: none;
  border-radius: ${radius.main};
  padding: 0 10px 0 20px;
  font-size: 1.2rem;
  outline-color: ${color.main};
  box-shadow: ${shadow.main};
  color: ${color.hard};
  font-family: ${font.main};
`

const Button = styled.button`
  height: 48px;
  width: 48px;
  border: none;
  background-color: ${color.main};
  border-radius: ${radius.main};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`
export { Search, Input, Button }
