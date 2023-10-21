import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Register = () => {

    const { createUser, updateProfileInfo } = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const image = form.image.value
        const email = form.email.value
        const password = form.password.value
        const user = { name, image, email, password }
        console.log(user)
        setError('')
        setSuccess('')
        if (password.length < 6) {
            setError('Password should be at least 6 characters')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Password should contain 1 uppercase letter')
            return
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/"'`|]/.test(password)) {
            setError('Password should contain 1 special character')
            return
        }

        createUser(email, password)
            .then(result => {
                console.log('registered successfully', result.user)
                setSuccess('registered successfully!')
                updateProfileInfo(name, image)
                    .then(() => {
                        console.log("User profile updated successfully");
                    })
                    .catch(error => {
                        console.error("Error updating user profile: ", error);
                    });

                form.reset()
            })
            .catch(error => {
                console.log(error)
                user ? setError('User already exits') : setError(error)
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:w-96 flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input name="image" type="text" placeholder="image url" className="input input-bordered" />
                        </div>
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
                                <p>Back to <Link to={'/login'} className="text-rose-500 font-semibold">Login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-error normal-case text-white" type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;