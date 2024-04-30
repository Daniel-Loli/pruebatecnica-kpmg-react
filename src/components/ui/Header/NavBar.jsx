import { NavLink } from "react-router-dom";
import Logo from '/Logo.png';

const NavBar = () => {
    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className="flex flex-col items-center md:flex-row md:justify-between w-full font-serif bg-slate-700 text-white pl-8">
            <div className="flex justify-center items-center w-full md:w-auto">
                <NavLink to="/" className="flex items-center">
                    <img src={Logo} alt="logo" className="w-1/4" />
                    <p className="ml-2">GlobalNews</p>
                </NavLink>
            </div>

            <ul className="flex flex-col md:flex-row md:justify-around gap-x-10 items-center w-full md:w-auto pr-8">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : 'undefined'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/News" className={({ isActive }) => isActive ? activeStyle : 'undefined'}>
                        News
                    </NavLink>
                </li>
                <li className="text-white/60">
                    <NavLink to="/Resources" className={({ isActive }) => isActive ? activeStyle : 'undefined'}>
                        Resources
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
