import React from "react";
import { Link, useHistory } from "react-router-dom";



export default function Home () {
    const history = useHistory()
console.log('history', history)

    const routeToOrder = () => {
        history.push('/pizza')
    }
    return (
<div className='home-wrapper'>
    <h1>Gourmet Pizza</h1>

    <img
    className='home-image'
    src='https://www.eatthis.com/wp-content/uploads/sites/4/2020/07/spanish-style-pizza.jpg?quality=82&strip=1&resize=1250%2C702'
    alt=''/>
    <h2 className='first-text'>Your favorite food, delivered while coding</h2>
    



    <Link to='/pizza'>
    <button className='md-button' id="order-pizza" >Pizza?</button>
    </Link>
</div>
    )
}

