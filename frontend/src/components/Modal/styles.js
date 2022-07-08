import styled from 'styled-components'
import { color, radius } from '../../styles/styleVariables'

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000d6;
  padding: 0 20px;
  display: flex;
  align-items: center;
`

const OptionList = styled.fieldset`
  background-color: white;
  border: none;
  width: 100%;
  padding: 25px;
  border-radius: ${radius.main};
`
const OptionContainer = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.9rem;
  margin-top: 15px;
  span {
    padding-left: 5px;
    font-weight: 500;
  }

  &:first-child {
    margin-top: 0px;
  }
`

const Option = styled.input`
  appearance: none;
  -webkit-appearance: none;
  border-bottom-color: ${color.main};
  margin-right: 5px;
  border: 6px solid ${color.soft};
  border-radius: 99px;
  width: 20px;
  height: 20px;

  &:checked {
    border: 7px solid ${color.main};
  }

  &:checked + span {
    color: ${color.main};
  }
`

export { Container, OptionList, OptionContainer, Option }
