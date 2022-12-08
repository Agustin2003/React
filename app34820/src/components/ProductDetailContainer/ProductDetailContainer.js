import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncMock' 
import { useParams } from 'react-router-dom'
import Counter from '../Counter/Counter'


const ProductDetailContainer = () => {
    const [product, setProducts] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { productId } = useParams()

    const [show, setShow] = useState(true)

    const handleOnAdd = (quantity) => {
      console.log('Se agrego al carrito ' + quantity)
    }

    useEffect(() => {
        getProductsById(productId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [productId])

    if(isLoading) {
        return <h1>Cargando Nota...</h1>
    }

    return (
        <div>
            <img className='Imagen' src={product.title}/>
            <h2>{product.category}</h2>
            <p>{product.text}</p>
            <p>{product.price}</p>
            <Counter initial={0} stock={product.stock} onAdd={handleOnAdd}/>
        </div>
    )
}

export default ProductDetailContainer