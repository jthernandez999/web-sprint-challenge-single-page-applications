import React from 'react'

const OrderForm = (props) => {
    const { values, change, disabled } = props
    console.log(props)

    const onChange = evt => {
        const { checked, name, type, value } = evt.target
        type === 'checkbox' ? change(name, checked) : change(name, value)
    }
    return (
        <div>
            <h1>Pizza Order Form</h1>
            <form id='pizza-form' className='form container'>
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
                        <input type='radio' name='crust' value='deepDish' onChange={onChange} checked={values.crust === 'deepDish'} />
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
                </div>

                <div className='form-group checkboxes'>
                    <h3>Topping(s)</h3>

                    <label>Pepperoni
                        <input type='checkbox' name='pepperoni' checked={values.pepperoni} onChange={onChange} />
                    </label>

                    <label>Sausage
                        <input type='checkbox' name='sausage'checked={values.sausage} onChange={onChange} />
                    </label>
                    
                    <label>Green Peppers
                        <input type='checkbox' name='greenPeppers' checked={values.greenPeppers} onChange={onChange} />
                    </label>
                    
                    <label>Onions
                        <input type='checkbox' name='onions' checked={values.onions} onChange={onChange} />
                    </label>
                </div>

                    <h3>Special Instruction</h3>
                    <label>
                        <input id="special-text" type='text' value={values.special_text} name='special_text' onChange={onChange} />
                    </label>
                <div className='med-btn'>
                    <button disabled={disabled}>Submit</button>
                </div>
                    
            </form>
        </div>
    )
}

export default OrderForm