

import { useContext } from 'react';
import { FcSmartphoneTablet } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext)
    const links = <>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/addProduct'}><li>Add Product</li></Link>
        <Link to={'/myCart'}><li>My Cart</li></Link>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu bg-opacity-70 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost hover:bg-transparent normal-case md:text-xl text-sm pixel">All Phone Brands <FcSmartphoneTablet></FcSmartphoneTablet></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu flex items-center justify-center gap-5 menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex items-center justify-center gap-2'>
                            <h1>{user.displayName}</h1>
                            <img className='w-10 rounded-full' src={user.photoURL} alt="" />
                            <Link className="btn hover:text-rose-500 md:text-sm text-xs bg-transparent border-none" to={'/login'}>Logout</Link>
                        </div>
                        :
                        <Link className="btn hover:text-rose-500 md:text-sm text-xs bg-transparent border-none" to={'/login'}>Login</Link>
                }

            </div>
        </div>
    );
};

export default Header;