
import { NavLink } from 'react-router-dom';
import logo from '/FoodLogo2.jpg'
const Navbar = () => {

    const links = (
        <div className="lg:flex space-x-5 font-bold">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-green-400 text-white font-bold" // Active styles
                            : "hover:bg-green-400 text-gray-700" // Inactive styles
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-green-400 text-white font-bold"
                            : "hover:bg-green-400 text-gray-700"
                    }
                >
                    Available Foods
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-green-400 text-white font-bold"
                            : "hover:bg-green-400 text-gray-700"
                    }
                >
                    Add Food
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-green-400 text-white font-bold"
                            : "hover:bg-green-400 text-gray-700"
                    }
                >
                    Manage MyFoods
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-green-400 text-white font-bold"
                            : "hover:bg-green-400 text-gray-700"
                    }
                >
                    MyFood Request
                </NavLink>
            </li>
        </div>
    );
    return (
        <div className="navbar bg-base-100 items-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        {
                            links
                        }

                    </ul>
                </div>
                <div className='flex items-center justify-between'>
                    <img className='w-10 h-10 rounded-full' src={logo} alt="" />
                    <a className="btn btn-ghost text-xl text-[18px] font-bold italic">Food Sharing</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {
                        links
                    }

                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to={'/auth/login'} className="btn bg-green-400">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;