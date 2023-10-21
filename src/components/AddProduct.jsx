import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const name = form.name.value
        const brandName = form.brandName.value
        const type = form.type.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value


        const products = { image, name, brandName, type, price, description, rating, }
        console.log(products)

        // send data to the server 
        fetch('https://all-phones-brand-server-enxcu13lw-adibs-projects-900c94ef.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(products),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    icon: 'success',
                    title: 'Product Added Successfully!',
                })
                form.reset()
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div>
            <form className="" onSubmit={handleAddProduct}>
                <div className="grid md:grid-cols-2 gap-2 p-5 grid-cols-1 items-center justify-center ">
                    <input className="p-2 bg-gray-200 placeholder-slate-500 mt-2 rounded-lg" type="text" name="image" id="" placeholder="image..." />

                    <input className="p-2 bg-gray-200 placeholder-slate-500 mt-2 rounded-lg" type="text" name="name" id="" placeholder="product name..." />


                    <select className="bg-gray-200 p-2  rounded-lg" name="brandName">
                        <option className="" value="brandName" selected>brand name...</option>
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Sony">Sony</option>
                        <option value="Google">Google</option>
                        <option value="Intel">Intel</option>
                        <option value="Xiaomi">Xiaomi</option>
                    </select>

                    <select className="bg-gray-200 p-2 rounded-lg" name="type">
                        <option value="type" selected>electronic type...</option>
                        <option value="phone">Phone</option>
                        <option value="computer">Computer</option>
                        <option value="headphone">Headphone</option>
                    </select>

                    <input className="p-2 bg-gray-200 placeholder-slate-500 mt-2 rounded-lg" type="text" name="price" id="" placeholder="product price..." />

                    <input className="p-2 bg-gray-200 placeholder-slate-500 mt-2 rounded-lg" type="text" name="rating" id="" placeholder="rating..." />

                    <textarea className="p-2 bg-gray-200 placeholder-slate-500 mt-2 rounded-lg" type="text" name="description" id="" placeholder="short description..." />
                </div>


                <input className="p-2 w-full btn btn-ghost hover:text-rose-500  mt-2 rounded-lg" type="submit" value="Add Product" />

            </form>
        </div>
    );
};

export default AddProduct;