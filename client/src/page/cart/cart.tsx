import { useState } from 'react';
import CartItem from './cartItem';
import './cart.css'

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Áo thun', price: 200000, img: '/assets/shirt.jpg', quantity: 1 },
    { id: 2, name: 'Quần jeans', price: 400000, img: '/assets/jeans.jpg', quantity: 1 },
  ]);

  const handleAddItem = (item:any) => {
    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const handleRemoveItem = (item:any) => {
    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.id === item.id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ).filter(cartItem => cartItem.quantity > 0)
    );
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} onAdd={handleAddItem} onRemove={handleRemoveItem} />
          ))}
          <div className="cart-total">
            <h3>Tổng tiền: {totalPrice.toLocaleString()} đ</h3>
            <button className="checkout-button">Thanh toán</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
