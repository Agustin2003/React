import {useEffect, useState} from 'react';
import ProductList from '../ProductList/ProductList';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import { useParams } from 'react-router-dom'

const ProductsContainer = () => {

    const [products, setProducts] = useState ([])

    const { categoryId } = useParams()

    useEffect(() => {
        getProducts().then(response => {
          setProducts(response)
        })
    }, [])

    useEffect(() => {
        if(!categoryId) {
          getProducts()
          .then(response => {
            setProducts(response)
          })
          .catch(error => {
            console.log(error)
          })  
        } else {
            getProductsByCategory(categoryId)
            .then(response => {
              setProducts(response)
            })
            .catch(error => {
              console.log(error)
            })  
        }
        
      }, [categoryId])

    return(
        
        <div >
            <ProductList products= {products} />
        </div>
    )
}

export default ProductsContainer


