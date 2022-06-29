import styled from 'styled-components'

const Container = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000d6;
  display: flex;
  align-items: center;
`
const OptionList = styled.fieldset`
  background-color: white;
  width: 100%;
  padding: 15px;
`

const Option = styled.input`
  button {
  }
`
export { Container, OptionList, Option }
