import { Link } from "react-router-dom";


const SelectedProduct = ({ selectedProduct }) => {

    const { _id , image, name, brandName, type, price, description, rating } = selectedProduct

    return (
        <div className="card bg-base-100 hover:shadow-2xl hover:scale-105 ease-out duration-100">
            <figure><img className="w-52" src={image} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <strong>{type}</strong>
                <p><strong>Brand : </strong> {brandName}</p>
                <p><strong>Price : </strong> {price}$</p>
                <p><strong>Rating : </strong> {rating}/5</p>
                <div className="card-actions md:justify-end justify-center">
                    <Link to={`/productDetails/${_id}`}><button className="btn btn-ghost hover:text-rose-500">Show Details</button></Link>
                    <Link to={`/updateProducts/${_id}`}><button className="btn btn-ghost hover:text-green-500">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SelectedProduct;