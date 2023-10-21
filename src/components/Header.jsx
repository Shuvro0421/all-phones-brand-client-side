
import { useContext } from 'react';
import { FcSmartphoneTablet } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import noUser from '../assets/images/no-user-image-icon-3.jpg'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logged out')
                navigate('/login')

            })
            .catch(error => {
                console.log(error)
            })
    }

    const links = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/addProduct'}>Add Product</Link></li>
        <li><Link to={'/myCart'}>My Cart</Link></li>
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
                        <div>
                            <div className="md:flex items-center hidden md:gap-2 gap-0">
                                <div>
                                    <p className="md:text-base text-xs  text-black text-center">{user.displayName}</p>
                                </div>
                                <label tabIndex={0} className="">
                                    <div className="">
                                        <img className='w-10 rounded-full' src={user?.photoURL ? user.photoURL : noUser} />
                                    </div>
                                </label>
                                <div>
                                    <button onClick={handleLogOut} className="btn  normal-case px-10 md:text-base text-xs w-10 md:w-32  hover:text-rose-500">Logout</button>
                                </div>
                            </div>
                            {/* small  */}
                            <div className="dropdown relative md:hidden">
                                <label tabIndex={0} className="btn btn-ghost md:hidden">
                                    <label tabIndex={0} className="">
                                        <div className="">
                                            <img className='w-10 rounded-full' src={user?.photoURL ? user.photoURL : noUser} />
                                        </div>
                                    </label>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="flex flex-col dropdown-content mt-3 z-[1] p-2 pl-2 shadow bg-base-100 bg-opacity-50 rounded-box w-40 absolute right-0 font-semibold"
                                >
                                    <div className="flex flex-col items-center justify-center gap-5">
                                        <p className="text-center  text-xs">{user.displayName}</p>
                                        <div>
                                            <button onClick={handleLogOut} className="btn normal-case px-10 md:text-base text-xs w-10 md:w-32 hover:text-rose-500">Logout</button>
                                        </div>
                                    </div>


                                </ul>
                            </div>

                        </div>

                        :
                        <Link className="btn hover:text-rose-500 md:text-sm text-xs bg-transparent border-none" to={'/login'}>Login</Link>
                }

            </div>
        </div>
    );
};

export default Header;