import './Products.css'
import { Link } from 'react-router-dom'

const Products = ({ product }) => {
    return (
        <div className='Product'>
            <img className='Imagen' src={product.title}/>
            <p>{product.category}</p>
            <p>{product.text.slice(0, 50)}</p>
            <p>{product.price}</p>
            <Link to={`/product/${product.id}`}>Ver detalle de la nota</Link>
        </div>
    )
}

export default Products


