import './Navbar.css'
import Button from './buttons/Button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = (props) => {

    const handleOneClick = () => {
            alert("hice un click")
    }

    return (
        <nav class = "navbar">
            <h1 style={{color: props.colortitle}}>MyApp</h1>
            <Button text ="Home" colorText="blue" func={handleOneClick} />
            <Button text ="Contact" colorText="blue" func={handleOneClick} />
            <Button text ="Products" colorText="blue" func={handleOneClick} />
            <Button text ="About" colorText="blue" func={handleOneClick} />
            <CartWidget />
        </nav>
    )
        
}

export default Navbar