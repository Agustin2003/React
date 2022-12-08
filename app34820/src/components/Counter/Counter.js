import { useState } from 'react'

const Counter = ({ initial, stock, onAdd }) => {


    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const reset = () => {
        setCount(initial)
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => increment()}>sumar</button>
            <button onClick={() => reset()}>reset</button>
            <button onClick={() => onAdd(count)}>agregar al carrito</button>
        </div>
    )
}

export default Counter