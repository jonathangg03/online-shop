import styled from 'styled-jsx/css'
import { color, radius, shadow } from '../../styles/theme'

const styles = styled`
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

}

h3 {
  font-size: 1.8rem;
  font-weight: 600;
}

.profilePicture {
  height: 45px;
  width: 45px;

}
.profilePicture img {
  border-radius: ${radius.round};
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: ${shadow.main};
}
  .cart {
    width: 40px;
    height: 40px;
    background-color: white;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    border-radius: 999px;
    box-shadow: ${shadow.main};
    color: ${color.main};

  }

`

export { styles }
