
import { useState } from "react";
import { useEffect } from "react";
import Cart from "./Cart";



const MyCart = () => {

    const [carts, setCarts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/cart`)
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    return (
        <div>
            {
                carts.map(cart => <Cart cart={cart} key={cart._id}></Cart>)
            }
        </div>
    );
};

export default MyCart;