import { useEffect, useState } from "react";
import Brand from "./Brand";

const Home = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-10 gird-cols-1 gap-4 md:p-5 p-2">
                {
                    brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>
            <div className="p-5 bg-black text-white md:m-5 m-2 rounded-lg shadow-2xl">
                <h1 className="md:text-6xl text-4xl text-center text-rose-500 font-semibold">About us</h1>
                <p className="mt-4">We are here to make changes for the product we buy and sell. We are gradually working with the products that are very demandable in day to day life. buy our product with the best value you can get. We provide excellent billing plans and many purchases options. You can set your own product, create a brand and set of to the tech world journey. Reach out to everyone. Make changes , become the person you dreamt for. Buy the latest products, sell the latest products . We give every advantages you can take.</p>
                <strong className="text-rose-500 mt-5">How it started</strong>
                <p>We are an online company. We sell products online. Started this business from 2023 and it have been a long run founder of this platform Md. Adib Arman Shuvro. Developed this website</p>
                <strong className="text-rose-500 mt-5">Our Clients</strong>
                <p>We have so many clients, <strong>Meta</strong> , <strong>Google</strong> , <strong>Apple</strong> ,  <strong>Samsung</strong> and many more. Our satisfied client gives us inspiration to go forward and we are moving </p>
                <strong className="text-rose-500 mt-5">Aim Goal</strong>
                <p>By the end of 2023, we are going to launch every single and most updated products in our website. Grossing up millions of dollars by selling the best product you can get and now, this will be more expanded</p>
            </div>
            <div className="p-5 bg-blue-950 text-white md:m-5 m-2 mt-5 rounded-lg shadow-2xl">
                <h1 className="md:text-6xl text-4xl text-center text-rose-500 font-semibold">Contact us</h1>
                <div>
                    <strong className="text-rose-500 mt-5">Name</strong>
                    <p>Md. Adib Arman Shuvro</p>
                </div>
                <div>
                    <strong className="text-rose-500 mt-5">E-mail</strong>
                    <p>adibarmanshuvro89@gmail.com</p>
                </div>
                <div>
                    <strong className="text-rose-500 mt-5">Number</strong>
                    <p>01767739908</p>
                </div>
            </div>
        </div>
    );
};

export default Home;