import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Brand = ({ brand }) => {
    const { id, brandName, imageLink } = brand
    return (
        <div className="card  bg-base-100 shadow-xl hover:scale-105 ease-in-out duration-100 hover:shadow-2xl image-full">
            <figure><img src={imageLink} alt={brandName} /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{brandName}</h2>
                <Link to={`/allProducts/${brandName}`}>
                    <div className="card-actions justify-end">
                        <button className="btn btn-ghost hover:text-rose-500">Visit<AiOutlineArrowRight className='text-xl'></AiOutlineArrowRight> </button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Brand;