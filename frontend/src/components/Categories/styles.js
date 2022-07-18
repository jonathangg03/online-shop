import styled from 'styled-components'
import { color, shadow, radius } from '../../styles/styleVariables'

const Categories = styled.section`
  height: 75px;
  width: 100%;
  display: flex;
  overflow-x: auto;
  padding-bottom: 11px;
  margin-bottom: 30px;
`

const Item = styled.button`
  border: none;
  margin-right: 20px;
  background-color: white;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border-radius: ${radius.main};
  box-shadow: ${shadow.main};
  font-size: 1.9rem;
  color: ${color.soft};

  p {
    font-size: 1.2rem;
    color: gray;
    padding-left: 10px;
    font-weight: 500;
  }

  &.selected {
    color: ${color.main};

    p {
      color: ${color.main};
    }
  }

  &:last-child {
    margin-right: 0;
  }
`

export { Categories, Item }
