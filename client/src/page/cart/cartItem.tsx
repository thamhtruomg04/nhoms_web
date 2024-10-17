// CartItem.js
import './cart.css'

const CartItem = ({ item, onRemove, onAdd }:any) => {
  return (
    <div className="cart-item">
      <img src={item.img} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">{item.price.toLocaleString()} đ</p>
        <div className="cart-item-actions">
          <button onClick={() => onRemove(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onAdd(item)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
