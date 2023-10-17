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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-10 gird-cols-1 gap-4 md:p-5 p-2">
            {
                brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
            }
        </div>
    );
};

export default Home;