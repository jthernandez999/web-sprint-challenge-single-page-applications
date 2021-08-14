import React from "react";
import { Link, useHistory } from "react-router-dom";

// const history = useHistory()
// console.log(history)

export default function Home () {

    return (
<div className='home-wrapper'>
    <h1>Gourmet Pizza</h1>
    <img
    className='home-image'
    src='https://www.eatthis.com/wp-content/uploads/sites/4/2020/07/spanish-style-pizza.jpg?quality=82&strip=1&resize=1250%2C702'
    alt=''
    />

    <Link to='/pizza'>
    <button className='md-button' id="order-pizza" >Pizza?</button>
    </Link>
</div>
    )
}

