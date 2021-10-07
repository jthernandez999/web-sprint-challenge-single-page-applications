import React, { useState, useEffect } from "react";
// import styled from 'styled-components'
import { Route, Switch, useHistory } from "react-router-dom";
import OrderForm from "./OrderForm";
import ConfirmationPage from "./ConfirmationPage";
import NavBar from './NavBar'
import Home from "./Home";
import axios from "axios";
import * as yup from 'yup'
import schema from './validation/formSchema'

// const Button = styled.button`
// display: flex;
// margin: auto;
// justify-content: center;
// width: 10%;
// padding: 5px;
// `

const initialFormValues = {
  // Text Inputs
  id: '',
  name: '',
  address: '',
  email: '', 
  phoneNumber: '',
  // Radio Buttons  
  crust: '',
  // Dropdown
  size: '',
  // Checkboxes
  topping1: false, 
  topping2: false, 
  topping3: false, 
  topping4: false, 
  special: ''
}
const initialFormErrors = {
  // Text Inputs
  name: '',
  address: '',
  email: '', 
  phoneNumber: '',
  // Radio Buttons  
  crust: '',
  // Dropdown
  size: '',
  // Checkboxes
  // topping1: '', 
  // topping2: '', 
  // topping3: '', 
  // topping4: '',
  special: ''
}
const initialOrders = []
const initialDisabled =  true

export default function App() {

  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const history = useHistory()



  const postNewOrder = newOrder => {
    axios
    .post('https://reqres.in/api/orders', newOrder)
    .then(response => {
      setOrders([...orders, newOrder])
      const orderDetails = response.data
      console.log('posting order', orderDetails)
    })
    .catch(err => console.log(err))
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  const inputChange = (name, value) => {
  yup
  .reach(schema, name)
  .validate(value)
  .then(() => {
    setFormErrors({
      ...formErrors, 
      [name]: ''
    })
  })
  .catch(err => {
    setFormErrors({
      ...formErrors, 
      [name]: err.message
    })
  })
  setFormValues({ 
      ...formValues,
      [name]: value
    })
  }
  
  const formSubmit = () => {
    const newOrder = {
      id: Date.now(),
      name: formValues.name.trim(), 
      address: formValues.address.trim(), 
      email: formValues.email.trim(), 
      phoneNumber: formValues.phoneNumber.trim(), 
      crust: formValues.crust.trim(),
      size: formValues.size.trim(), 
      toppings: ['topping1', 'topping2', 'topping3', 'topping4'].filter(topping => formValues[topping]),
      special: formValues.special.trim()
    }
    
    postNewOrder(newOrder)
    history.push('/order-confirmation')
    console.log(newOrder)
    
  }

  useEffect(() => {
    schema
      .isValid(formValues)
      .then(isSchemaValid => {
    setDisabled(!isSchemaValid)
    })
  }, [formValues])

  return (
    <>
      <Route 
      path='/'
      component={NavBar}
      />
      
      <Switch>

      <Route path='/pizza'>
        <OrderForm 
        values={formValues}
        change={inputChange}
        disabled={disabled}
        errors={formErrors}
        submit={formSubmit}
        />
      </Route>

      <Route path='/order-confirmation'>
        {
          orders.map(order => {
            return (
              <ConfirmationPage details={order} />
            )
          })
        }
        </Route>

      <Route
      path='/'
      component={Home}
      />

      </Switch>
    


    </>
  );
};
