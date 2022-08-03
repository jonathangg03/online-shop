import styled from 'styled-components'
import { color, font } from '../../styles/styleVariables'

const Images = styled.div``

const MainImage = styled.figure`
  width: 100%;
  max-width: 345px;
  height: 330px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageMenu = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 15px 0;
`

const ImageOption = styled.img`
  width: 60px;
  height: 60px;
  margin: 5px;
  border: 2px solid ${color.soft};
  border-radius: 10px;
  border: ${(props) => props.selected && `2px solid ${color.main}`};
`

const Title = styled.h2`
  font-size: 3rem;
`

const Description = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0px 0 10px;
`

const Price = styled.h4`
  font-size: 2.2rem;
  font-weight: 400;
`

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

export { Images, MainImage, ImageMenu, ImageOption, Title, Description, Price, Buttons, Like, Chart }
