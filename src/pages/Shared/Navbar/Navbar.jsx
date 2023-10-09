import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#ED4A43] underline" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#ED4A43] underline" : ""
                }
            >
                About Us
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#ED4A43] underline" : ""
                }
            >
                Contact
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#ED4A43] underline" : ""
                }
            >
                Register
            </NavLink>
        </li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/">
                    <div className="flex items-center">
                        <h2 className="text-2xl font-extrabold hover:text-[#ED4A43]">Corp Elevate</h2>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-6 text-[#292929] text-xl font-medium">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex gap-3 items-center">
                            <h2 className="hidden md:block text-xl font-medium text-[#292929]">{user.displayName}</h2>
                            <img className="w-10 rounded-full" src={user.photoURL} />
                            <button onClick={handleSignOut} className="bg-[#ED4A43] py-2 px-6 rounded-lg text-white font-medium">Sign Out</button>
                        </div>
                        : <Link to='/login' className="bg-[#ED4A43] py-2 px-6 rounded-lg text-white font-medium">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;