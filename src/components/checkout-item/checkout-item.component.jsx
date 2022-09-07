import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CheckoutItemContainer, CheckoutItemDetail, ImageContainer, QuantityDetail, RemoveButton } from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { name, imageUrl, price, quantity } = cartItem;

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <CheckoutItemDetail>{name}</CheckoutItemDetail>
            <QuantityDetail>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </QuantityDetail>
            <CheckoutItemDetail>{price}</CheckoutItemDetail>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;