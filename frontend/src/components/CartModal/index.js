import { Container } from './styles'
import { COLORS } from '../../data'

const COLOR_NAMES = Object.keys(COLORS)


const CartModal = ({ product }) => {

    return <Container>
        <form>
            {console.log(product)}
            <label>
                <span>Color:</span>
                <select name="quantity" id="quantity" onChange={(event) => { console.log(event.target.value) }}>
                    {
                        product.colors.map(color => {
                            return (
                                <option value={color} key={color}>{COLOR_NAMES[color]}</option>
                            )
                        })
                    }

                </select>
            </label>
            <label>
                <span>Cantidad:</span>
                <input type='number' required min={0} />
            </label>
        </form>
    </Container>
}

export default CartModal
