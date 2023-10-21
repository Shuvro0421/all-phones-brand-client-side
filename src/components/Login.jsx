
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";



const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;