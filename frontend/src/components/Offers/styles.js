import styled from 'styled-components'
import { color, radius } from '../../styles/styleVariables'

const Offers = styled.section`
  margin-bottom: 20px;
`

const List = styled.div`
  height: 170px;
  background-color: red;
  margin-bottom: 8px;
  border-radius: ${radius.main};
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(127, 82, 186, 1) 0%,
    rgba(129, 209, 229, 1) 100%
  );
  padding: 15px;
  display: flex;
  justify-content: space-between;
`

const Details = styled.div`
  background-color: #ffffff6b;
  width: 150px;
  padding: 10px;
  height: 100%;
  border-radius: ${radius.main};
  color: white;
  text-align: center;
  font-size: 1.1rem;
  span {
    font-size: 1.2rem;
    font-weight: 300;
  }
  div {
    font-size: 2.6rem;
    text-shadow: -7px 4px 5px #00000054;
    font-weight: 500;
  }
  .percentage {
    font-size: 5.4rem;
    height: 60px;
    font-weight: 500;
  }
`

const Product = styled.figure`
  width: calc(100% - 180px);
  height: 100%;
  border-radius: ${radius.main};
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Counter = styled.div`
  height: 11px;
  display: flex;
  justify-content: center;
  div {
    width: 11px;
    height: 100%;
    background-color: white;
    border: 2px solid ${color.main};
    border-radius: 999px;
    margin: 0 3px;
  }

  .selected {
    width: 30px;
    background-color: ${color.main};
  }
`

export { Offers, List, Details, Product, Image, Counter }
