import Products from "../Products/Products"

const ProductList = ({ products }) => {
    return(
        
        <div style={{ display: "flex"}}>
            {products.map(product => ( 
                <Products key={product.id} product = {product}/>
            )) }
        </div>
    )
}

export default ProductList