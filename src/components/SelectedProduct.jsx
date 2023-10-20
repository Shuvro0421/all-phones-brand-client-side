

const SelectedProduct = ({ selectedProduct }) => {

    const { image, name, brandName, type, price, description, rating } = selectedProduct

    return (
        <div className="card bg-base-100 hover:shadow-2xl hover:scale-105 ease-out duration-100">
            <figure><img src={image} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <strong>{type}</strong>
                <p><strong>Brand : </strong> {brandName}</p>
                <p><strong>Price : </strong> {price}$</p>
                <p><strong>Rating : </strong> {rating}/5</p>
                <p>{description}</p>
                <div className="card-actions md:justify-end justify-center">
                    <button className="btn btn-ghost hover:text-rose-500">Show Details</button>
                    <button className="btn btn-ghost hover:text-green-500">Update</button>
                </div>
            </div>
        </div>
    );
};

export default SelectedProduct;