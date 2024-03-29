import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'


import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const { cart, getTotal, clearCart } = useContext(CartContext)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [numero, setNumero] = useState("")

    const handleCreateOrder = async () => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name: {nombre},
                    email: {email},
                    phone: {numero}
                },
                items: cart,
                total: getTotal()
            }
    
            const batch = writeBatch(db)
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
            const productsAddedToCartFromFirestore = await getDocs(productsRef)
    
            const { docs } = productsAddedToCartFromFirestore
    
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
    
                const orderAdded = await addDoc(orderRef, objOrder)
    
                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 2000)

                console.log(orderAdded.id)
            } else {
                console.error('Hay productos fuera de stock')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    } 
       

    if(loading) {
        return <h1>Generando Orden...</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            

             <form>
                    <label for="nombre">Dime tu Nombre: <br/>
                    <input type="text" placeholder="Nombre y Apellido" value={nombre} onChange={(e) => setNombre(e.target.value)} /> <br/><br/>
                    </label><br/><br/>
                    <label for="telefono">Dime tu Telefono: <br/>
                    <input type="string" placeholder="Numero de telefono" value={numero} onChange={(e) => setNumero(e.target.value)}/> <br/><br/>
                    </label><br/><br/>
                    <label for="email">Dime tu Email: <br/>
                        <input type="email" placeholder="aaa@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
                    </label><br/><br/> 

            </form> 
             

            <button onClick={handleCreateOrder}>Confirmar orden</button>
        </div>
    )
}

export default Checkout