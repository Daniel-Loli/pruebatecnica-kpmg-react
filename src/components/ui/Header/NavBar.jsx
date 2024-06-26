import { NavLink } from "react-router-dom";

const NavBar = () => {
    const activeStyle = 'underline underline-offset-4';
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full top-0 p-4">
            <NavLink to="/" className="flex items-center">
                <img src="https://img.icons8.com/ios/50/000000/online-store.png" alt="logo" />
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
                <li className="text-black/60">
                    <NavLink to="/Resources" className={({ isActive }) => isActive ? activeStyle : 'undefined'}>
                        Resources
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
