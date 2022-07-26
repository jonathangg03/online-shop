import styled from 'styled-components'
import { color, shadow, radius } from '../../styles/styleVariables'

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h3 {
    font-size: 1.3rem;
    font-weight: 400;
    color: gray;
  }

  h5 {
    font-weight: 500;
  }

  button {
    font-size: 1.8rem;
    color: ${color.main};
    border: none;
    background-color: white;
    box-shadow: ${shadow.main};
    width: 90px;
    padding: 15px;
    border-radius: ${radius.main};
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const Products = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;
`

export { Products, Head }
