
import { useState } from "react";
import { useEffect } from "react";
import Cart from "./Cart";



const MyCart = () => {

    const [carts, setCarts] = useState([])

    useEffect(() => {
        fetch(`https://all-phones-brand-server-enxcu13lw-adibs-projects-900c94ef.vercel.app/cart`)
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2">
            {
                carts.map(cart => <Cart cart={cart} carts={carts} setCarts={setCarts} key={cart._id}></Cart>)
            }
        </div>
    );
};

export default MyCart;