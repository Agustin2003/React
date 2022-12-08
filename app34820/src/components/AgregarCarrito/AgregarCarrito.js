import { useState, useEffect } from "react"

const AgregarCarrito = () => {
    const [count, setCount] = useState(0)

    console.log('render')
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>sumar uno</button>
            <button onClick={() => setCount(count - 1)}>restar uno</button>
        </div>
    )
}

export default AgregarCarrito