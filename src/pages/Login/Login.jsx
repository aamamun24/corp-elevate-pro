import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful', {
                    theme: "colored",
                })
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/')
                }, 2000);
            })
            .catch(error => {
                console.error(error.message)
                toast.error("Email or password does not match.", {
                    theme: "colored",
                });
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful', {
                    theme: "colored",
                })
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/')
                }, 2000);
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message, {
                    theme: "colored",
                });
            })
    }

    return (
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 mx-auto my-12">
            <h2 className="text-3xl font-semibold text-center mt-10">Login your account</h2>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="bg-[#ED4A43] rounded-md py-2 text-xl text-white font-medium">Login</button>
                </div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline"><FcGoogle className="text-2xl"/> Login with Google</button>
                <p className="text-[#706F6F] font-semibold text-center">Don't Have An Account ? <Link to="/register" className="text-[#ED4A43]">Register</Link></p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;