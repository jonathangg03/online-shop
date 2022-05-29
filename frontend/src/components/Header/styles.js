import styled from 'styled-components'
import { color, shadow } from '../../styles/styleVariables'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

const Cart = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  border-radius: 999px;
  box-shadow: ${shadow.main};
  color: ${color.main};
`

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
`

const ProfilePicture = styled.figure`
  height: 45px;
  width: 45px;
`

const Image = styled.img`
  border-radius: 999px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: ${shadow.main};
`

export { Header, Cart, Title, ProfilePicture, Image }
