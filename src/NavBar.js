import { Route, Link, Switch } from "react-router-dom";



const NavBar = () => {

    return (
        <nav>
            <h1>Lambda Eats</h1>
            <div className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/order-pizza'>Order</Link>
            </div>
        </nav>
    )
}

export default NavBar