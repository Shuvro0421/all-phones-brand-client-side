

const Cart = ({cart}) => {

    const handleDelete = () =>{
        console.log('hello')
    }

    const {name , brandName , image , rating} = cart
    return (
        <div className="card lg:card-side md:hover:scale-105 ease-out duration-150 md:hover:shadow-2xl md:mx-20 md:hover:border-2">
            <figure><img className="w-40" src={image} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{brandName}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleDelete} className="btn btn-error text-white">X</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;