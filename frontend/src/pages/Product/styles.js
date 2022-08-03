import styled from 'styled-components'
import { color } from '../../styles/styleVariables'

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

export { Images, MainImage, ImageMenu, ImageOption, Title, Description, Price }
