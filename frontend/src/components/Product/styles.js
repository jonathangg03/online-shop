import styled from 'styled-components'
import { color, shadow, radius } from '../../styles/styleVariables'

const Product = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  background-color: white;
  border-radius: ${radius.main};
  box-shadow: ${shadow.main};
  position: relative;

  img {
    width: 100%;
    height: 132.5px;
    margin-bottom: 5px;
    object-fit: contain;
  }

  h5 {
    font-size: 1.8rem;
    font-weight: 600;
    padding-bottom: 5px;
  }

  p {
    font-size: 1.2rem;
    padding-bottom: 5px;
    color: gray;
  }

  h6 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .new {
    background-color: ${color.main};
    width: 50px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    height: 10px;
    position: absolute;
    color: white;
    font-weight: 400;
    height: 20px;
    top: 10px;
    left: 8px;
  }
`

export { Product }
