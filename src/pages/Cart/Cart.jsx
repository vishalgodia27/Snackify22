import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)
  const navigate = useNavigate()

  // Calculate subtotal
  const subtotal = food_list.reduce((acc, item) => {
    return acc + (cartItems[item._id] > 0 ? item.price * cartItems[item._id] : 0)
  }, 0)
  const deliveryFee = 2
  const total = subtotal + deliveryFee

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-item-title'>
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => (
          cartItems[item._id] > 0 && (
            <React.Fragment key={item._id}>
              <div className='cart-item-title cart-items-item'>
                <img src={item.image} alt={item.name} style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p className='cross' onClick={() => removeFromCart(item._id)}>X</p>
              </div>
              <hr />
            </React.Fragment>
          )
        ))}
      </div>
      <div className='cart-bottom'>
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <span>Subtotal</span>
              <span>${getTotalCartAmount()}</span>
            </div>
            <div className="cart-total-details">
              <span>Delivery Fee</span>
              <span>${deliveryFee}</span>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${total}</b>
            </div>
            <button onClick={() => navigate('/order')}>Proceed To Checkout</button>
          </div>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code, enter it here:</p>
          <div className='cart-promocode-input'>
            <input type="text" placeholder='Promo code' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart