import { AiOutlineArrowRight } from 'react-icons/ai';

const Brand = ({ brand }) => {
    const { id, brandName, imageLink } = brand
    return (
        <div className="card  bg-base-100 shadow-xl image-full">
            <figure><img src={imageLink} alt={brandName} /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{brandName}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-ghost hover:text-rose-500">Visit<AiOutlineArrowRight className='text-xl'></AiOutlineArrowRight> </button>
                </div>
            </div>
        </div>
    );
};

export default Brand;