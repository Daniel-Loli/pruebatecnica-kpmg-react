import { NavLink } from "react-router-dom";
import Logo from '/Logo.png'

const NavBar = () => {
    const activeStyle = 'underline underline-offset-4';
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full top-0  bg-slate-700 text-white">
            <NavLink to="/" className="flex  items-center ">
                <img src={Logo} alt="logo" className="w-1/4 " />
                <p >GlobalNews</p>
            </NavLink>

            <ul className="flex justify-evenly items-center w-1/2">
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
