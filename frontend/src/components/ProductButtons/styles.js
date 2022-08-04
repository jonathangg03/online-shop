import styled from "styled-components"
import { font } from '../../styles/styleVariables'

const Buttons = styled.div`
  display: flex;
  height: 50px;
  margin-top: 20px;
`

const Like = styled.button`
height: 100%;
width: 100px;
margin-right: 15px;
border-radius: 15px;
font-size: 2.7rem;
display: flex;
align-items: center;
justify-content: center;
background-color: #f35c5c;
color: white;
border: none
`

const Chart = styled.button`
height: 100%;
width: 100%;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.6rem;
font-weight: 400;
font-family: ${font.main};
background-color: #6E65FF;
color: white;
border: none;
span {
  margin-right: 5px;
}
`

export {Buttons, Like, Chart}