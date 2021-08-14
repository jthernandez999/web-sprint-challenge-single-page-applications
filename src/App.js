import React from "react";
import styled from 'styled-components'
import { Route, Link, Switch } from "react-router-dom";
import OrderForm from "./OrderForm";
import ConfirmationPage from "./ConfirmationPage";
import NavBar from './NavBar'

const Button = styled.button`
display: flex;
margin: auto;
justify-content: center;
width: 10%;
padding: 5px;
`

const App = () => {
  return (
    <>
      <Route 
      path='/'
      component={NavBar}
      />

    
      <h1>Lambda Eats</h1>
      <Button className="order-pizza" >Pizza?</Button>

    </>
  );
};
export default App;