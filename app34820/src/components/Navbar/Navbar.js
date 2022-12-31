import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around'}}>
            <h1>Ecommerce</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '75%'}}>
                <Link className="Option" to='/'>Ver todo</Link>
                <Link className="Option" to='/category/blanco-negro'>Blanco y Negro</Link>
                <Link className="Option" to='/category/color'>Color</Link>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar