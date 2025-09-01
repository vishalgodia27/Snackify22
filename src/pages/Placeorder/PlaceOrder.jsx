import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

function PlaceOrder() {
  const { getTotalCartAmount, cartItems, food_list } = useContext(StoreContext)
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    zipCode: '',
    country: ''
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the order to your backend
    console.log('Order submitted:', { formData, cartItems, total: getTotalCartAmount() })
    alert('Order placed successfully!')
    navigate('/')
  }

  const deliveryFee = 2
  const subtotal = getTotalCartAmount()
  const total = subtotal + deliveryFee

  return (
    <form className='place-order' onSubmit={handleSubmit}>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input 
            type='text' 
            placeholder='First Name' 
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input 
            type='text' 
            placeholder='Last Name' 
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='multi-fields'>
          <input 
            type='email' 
            placeholder='Email' 
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input 
            type='tel' 
            placeholder='Phone' 
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <input 
          type='text' 
          placeholder='Street Address' 
          name='street'
          value={formData.street}
          onChange={handleChange}
          required
        />
        <div className='multi-fields'>
          <input 
            type='text' 
            placeholder='City' 
            name='city'
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input 
            type='text' 
            placeholder='Zip Code' 
            name='zipCode'
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>
        <input 
          type='text' 
          placeholder='Country' 
          name='country'
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div className='cart-total-details'>
            <p>Subtotal: <span>${subtotal}</span></p>
            <p>Delivery Fee: <span>${deliveryFee}</span></p>
            <hr />
            <p><b>Total: <span>${total}</span></b></p>
          </div>
          <button type='submit'>Place Order</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder