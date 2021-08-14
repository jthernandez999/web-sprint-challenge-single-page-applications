import React, { useState, useEffect } from "react";
// import styled from 'styled-components'
import { Route, Link, Switch } from "react-router-dom";
import OrderForm from "./OrderForm";
import ConfirmationPage from "./ConfirmationPage";
import NavBar from './NavBar'
import Home from "./Home";
import axios from "axios";
import * as Yup from 'yup'

// const Button = styled.button`
// display: flex;
// margin: auto;
// justify-content: center;
// width: 10%;
// padding: 5px;
// `

const initialFormValues = {
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
  pepperoni: false, 
  sausage: false, 
  greenPeppers: false, 
  onions: false, 
  special_text: ''
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
  pepperoni: '', 
  sausage: '', 
  greenPeppers: '', 
  onions: '',
  special_text: ''
}
const initialOrder = []
const initialDisabled =  true

const App = () => {
  const [order, setOrder] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getOrders = () => {
    axios
    .get('https://reqres.in/api/orders')
    .then(res => {
      console.log(res)
    })
  }

  const inputChange = (name, value) => {
setFormValues({ ...formValues, [name]: value})
  }
  

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
        disabled={disabled} />
      </Route>

      <Route
      path='/'
      component={Home}
      />

      </Switch>
    


    </>
  );
};
export default App;