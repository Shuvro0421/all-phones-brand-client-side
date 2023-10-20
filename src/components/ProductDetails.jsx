import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
    const { id } = useParams()
    const [inTheProduct, setInTheProduct] = useState([])

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
                    <button className="btn btn-ghost hover:text-rose-500">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;