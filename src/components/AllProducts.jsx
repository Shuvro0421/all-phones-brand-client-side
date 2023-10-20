import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SelectedProduct from "./SelectedProduct";

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])



    // get the brand name
    const { brandName } = useParams();
    const selectedProducts = allProducts.filter(allProduct => allProduct.brandName == brandName)




    return (
        <div>

            <div>
                {
                    selectedProducts.length > 0 ?
                        <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 md:p-5 p-2 gap-5">
                            {
                                selectedProducts.map(selectedProduct => <SelectedProduct key={selectedProduct._id} selectedProduct={selectedProduct}></SelectedProduct>)
                            }
                        </div>
                        :

                        <div className="text-rose-500 font-semibold md:text-5xl text-2xl my-40 text-center">
                            <h1>Products Coming Soon...</h1>
                        </div>
                }
            </div>
        </div>
    );
};

export default AllProducts;
