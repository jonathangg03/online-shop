import styled from 'styled-components'
import { color, radius } from '../../styles/styleVariables'

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

export { OptionList, OptionContainer, Option }
