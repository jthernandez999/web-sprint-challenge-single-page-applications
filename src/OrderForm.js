import React from 'react'
import { useRouteMatch, useHistory } from 'react-router'

// const history = useHistory()
// history.push('/order-confirmation')

const OrderForm = (props) => {
    const { 
        values,
        change,
        disabled, 
        errors, 
        submit
    } = props
    // console.log(props)

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
        
        
    }
    const onChange = evt => {
        const { checked, name, type, value } = evt.target
        if(type === 'checkbox') {
            change(name, checked)
        } else {
            change(name, value)
        }
    }
    // type === 'checkbox' ? change(name, checked) : change(name, value)
    return (
        
            <form id='pizza-form' onSubmit={onSubmit}>
                <h1>Pizza Order Form</h1>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.address}</div>
                    <div>{errors.email}</div>
                    <div>{errors.phoneNumber}</div>
                    <div>{errors.crust}</div>
                    <div>{errors.size}</div>
                </div>
                <div className='form-group deliveryInfo'>
                    <h2>Delivery Information</h2>
                    <label>Name
                        <input id="name-input" type='text' value={values.name} name='name' onChange={onChange} />
                    </label>

                    <label>Address
                        <input type='text' value={values.address} name='address' onChange={onChange} />
                    </label>

                    <label>Email
                        <input type='email' value={values.email} name='email' onChange={onChange} />
                    </label>

                    <label>Phone Number
                        <input type='tel' value={values.phoneNumber} name='phoneNumber' onChange={onChange} />
                    </label>
                </div>
                
                <div className='form-group orderInfo'>
                    <h2>Order Information</h2>

                    <h4>Crust</h4>
                    <label>Thin
                        <input type='radio' name='crust' value='thin' onChange={onChange} checked={values.crust === 'thin'} />
                    </label>

                    <label>Deep Dish
                        <input type='radio' name='crust' value='deep dish' onChange={onChange} checked={values.crust === 'deep dish'} />
                    </label>
                    
                    <label><h3>Size</h3>
                        <select 
                        id='size-dropdown'
                        value={values.size}
                        name='size'
                        onChange={onChange}>
                            <option value=''>-Select a size-</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                            <option value='extraLarge'>Extra Large</option>
                        </select>
                    </label>
                

                <div className='form-group checkboxes'>
                    <h3>Topping(s)</h3>

                    <label>Pepperoni
                        <input type='checkbox' name='topping1' checked={values.topping1} onChange={onChange} />
                    </label>

                    <label>Sausage
                        <input type='checkbox' name='topping2'checked={values.topping2} onChange={onChange} />
                    </label>
                    
                    <label>Green Peppers
                        <input type='checkbox' name='topping3' checked={values.topping3} onChange={onChange} />
                    </label>
                    
                    <label>Onions
                        <input type='checkbox' name='topping4' checked={values.topping4} onChange={onChange} />
                    </label>
                </div>

                    <h3>Special Instructions</h3>
                    <label>
                        <input id="special-text" type='text' value={values.special} name='special' onChange={onChange} />
                    </label>
                </div>
                    <button id='order-button' className='order-button' disabled={disabled}>Add to Order</button>
                
                    
            </form>
        
    )
}

export default OrderForm