import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SelectedProduct from "./SelectedProduct";

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        fetch('https://all-phones-brand-server-enxcu13lw-adibs-projects-900c94ef.vercel.app/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])



    // get the brand name
    const { brandName } = useParams();
    const selectedProducts = allProducts.filter(allProduct => allProduct.brandName == brandName)




    return (
        <div>

            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://www.gizmochina.com/wp-content/uploads/2021/10/macbook-pro-2021-renders.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-ghost  btn-circle hover:text-rose-500">❮</a>
                            <a href="#slide2" className="btn btn-ghost  btn-circle hover:text-rose-500">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/05/Google-Pixel-6%EF%BC%9AComing-Soon-%E7%AF%87-0-19-screenshot.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-ghost btn-circle hover:text-rose-500">❮</a>
                            <a href="#slide3" className="btn btn-ghost btn-circle hover:text-rose-500">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://fdn.gsmarena.com/imgroot/news/21/03/xiaomi-mi-mix-fold-announced/inline/-1200/gsmarena_002.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-ghost btn-circle hover:text-rose-500">❮</a>
                            <a href="#slide4" className="btn btn-ghost btn-circle hover:text-rose-500">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://www.androidheadlines.com/wp-content/uploads/2020/08/Samsung-Galaxy-Note-20-adverts-from-Samsung.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-ghost btn-circle hover:text-rose-500">❮</a>
                            <a href="#slide1" className="btn btn-ghost btn-circle hover:text-rose-500">❯</a>
                        </div>
                    </div>
                </div>
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
