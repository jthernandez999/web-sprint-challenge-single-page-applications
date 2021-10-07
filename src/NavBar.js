import { Link } from "react-router-dom";



const NavBar = () => {

    return (
        <nav>
            <h1 className='store-header'>Lambda Eats</h1>
            <div className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/pizza'>Order</Link>
            </div>
        </nav>
    )
}

export default NavBar