import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'



const ProductDetails = () => {
    const { id } = useParams()
    const items = useLoaderData()
    const [inTheProduct, setInTheProduct] = useState([])
    const cardItem = items.find(item => item._id == id)

    const handleAddtoCart = () =>{
        fetch(`http://localhost:5000/cart` , {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(cardItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Swal.fire({
                icon: 'success',
                title: 'Product Added to Cart',
            })

        })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/products/singleProduct/${id}`)
            .then(res => res.json())
            .then(data => setInTheProduct(data))
    })

    return (
        <div className="card">
            <figure><img src={inTheProduct.image} alt={inTheProduct.name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{inTheProduct.name}</h2>
                <p>{inTheProduct.description}</p>
                <div className="card-actions justify-end">
                   <button onClick={handleAddtoCart} className="btn btn-ghost hover:text-rose-500">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;