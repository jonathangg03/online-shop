import { Title, Description, Price } from './styles'

const ProductDetails = ({name, description, price}) => {
    return (
        <>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Price>₡{price}</Price>
        </>
    )
}

export default ProductDetails