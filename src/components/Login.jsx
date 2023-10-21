import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";



const Login = () => {
    const { signInUser , handleGoogleSignIn, user } = useContext(AuthContext)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const location = useLocation()

    if (user) {
        navigate(location?.state ? location.state : '/')
    }


    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
        console.log(user)
        setSuccess('')
        setError('')
        signInUser(email, password)
            .then(res => {
                console.log('user signed in', res.user)
                setSuccess('signed in successfully');
                form.reset()
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:w-96 flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <p className="text-rose-500 font-semibold mt-2">{success}</p>
                            <p className="text-yellow-500 font-semibold mt-2">{error}</p>
                            <label className="label">
                                <p>New to Login ? <Link to={'/register'} className="text-rose-500 font-semibold">Register</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-error normal-case text-white" type="submit" value="Login" />
                        </div>
                        <div className="flex items-center my-4">
                            <div className="border-t border-rose-500 flex-grow"></div>
                            <div className="mx-4  font-semibold">or</div>
                            <div className="border-t border-rose-500 flex-grow"></div>
                        </div>
                        <div className="form-control">
                            <button onClick={handleGoogleSignIn} className="btn text-white btn-error normal-case">Google <FcGoogle className="text-3xl"></FcGoogle></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;