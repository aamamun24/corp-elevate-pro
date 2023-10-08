import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const { createUser, userUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate()


    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters', {
                theme: "colored",
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Password must be at least one uppercase later', {
                theme: "colored",
            });
            return;
        }
        else if (!/[#?!@$%^&*-]/.test(password)) {
            toast.error('Password must be at least one special character', {
                theme: "colored",
            });
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                userUpdateProfile(name, photo)
                    .then(() => {
                        toast.success('Registration Complete Successfully', {
                            theme: "colored",
                        });
                        setTimeout(() => {
                            navigate('/')
                        }, 2000);
                    })
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message, {
                    theme: "colored",
                });
            })
    }

    return (
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mx-auto my-12">
            <h2 className="text-3xl font-semibold text-center mt-10">Register your account</h2>
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                </div>
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
                    <button className="bg-[#ED4A43] rounded-md py-2 text-xl text-white font-medium">Register</button>
                </div>
                <p className="text-[#706F6F] font-semibold text-center">Already Have An Account? <Link to="/login" className="text-[#ED4A43]">Login</Link></p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Register;