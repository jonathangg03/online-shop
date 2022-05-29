import { Header, Cart, Title, ProfilePicture, Image } from './styles'
import { FaShoppingBasket } from 'react-icons/fa'

const HeaderComponent = () => {
  return (
    <Header>
      <Cart className='cart'>
        <FaShoppingBasket className='cart__icon' />
      </Cart>
      <Title>Home</Title>
      <ProfilePicture className='profilePicture'>
        <Image
          src='https://images.unsplash.com/photo-1583795128727-6ec3642408f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
          width='50'
          height='50'
        />
      </ProfilePicture>
    </Header>
  )
}

export default HeaderComponent
