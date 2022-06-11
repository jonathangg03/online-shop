import styled from 'styled-components'
import { color, shadow, radius } from '../../styles/styleVariables'

const Products = styled.ul`
  list-style: none;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
`

const Product = styled.li`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  padding: 20px 15px;
  background-color: white;
  border-radius: ${radius.main};
  box-shadow: ${shadow.main};
  position: relative;
  gap: 10px;
`

const ImageContainer = styled.figure`
  display: flex;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    margin-bottom: 5px;
    object-fit: contain;
    max-width: 77px;
    max-height: 92px;
  }
`

const ProductName = styled.h5`
  font-size: 1.8rem;
  font-weight: 600;
  padding-bottom: 5px;
`

const ProductDescription = styled.p`
  font-size: 1.2rem;
  padding-bottom: 5px;
  color: gray;
`

const ProductPrice = styled.h6`
  font-size: 1.5rem;
  font-weight: 500;
`

const DeleteButton = styled.button`
  background-color: ${color.main};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  border: none;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: white;
  font-weight: 700;
  top: 10px;
  right: 8px;
  font-size: 1rem;
  padding: 0;
  cursor: pointer;
`

export {
  Products,
  Product,
  ImageContainer,
  ProductName,
  ProductDescription,
  ProductPrice,
  DeleteButton
}
