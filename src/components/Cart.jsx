import Swal from 'sweetalert2'

const Cart = ({ cart, carts, setCarts }) => {
    const { _id, name, brandName, image } = cart

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )
                            const deleteGone = carts.filter(singleCart => singleCart._id !== _id)
                            setCarts(deleteGone)
                        }
                    })
            }
        })

    }

    return (
        <div className="card bg-base-100 mt-5 md:m-7 m-2 hover:scale-105 hover:shadow-2xl ease-in-out duration-100">
            <figure><img className="w-40" src={image} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{brandName}</p>
                <div className=" justify-end">

                    <div className="flex  justify-between items-center">
                        <p className="font-semibold">Added Products</p>
                        <button onClick={() => handleDelete(_id)} className="btn btn-error text-white hover:btn-ghost hover:text-rose-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;