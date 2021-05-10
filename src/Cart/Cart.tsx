import CartItem from '../CartItem/CartItem'

import {Wrapper} from './Cart.styles'

import {ICartItem} from '../interfaces'

type Props = {
    cartItems: ICartItem[];
    addToCart: (clickedItem: ICartItem) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {

    const calculateTotal = (items: ICartItem[]) => {
        return items.reduce((accumulator: number, item) => accumulator + item.amount * item.price, 0)
    }

    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems.map(item => (
                <CartItem 
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
}

export default Cart;