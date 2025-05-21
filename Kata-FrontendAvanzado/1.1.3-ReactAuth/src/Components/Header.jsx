import './header.scss';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '@/Hook/useAuthContext';

const Header = () => {
    const { logout, isAuth } = useAuthContext();

    const linkIsActive = (isActive) => 
        isActive ? "header__item-link header__item-link--is-active" : "header__item-link";

    return (
        <div>
            {/* BEM PARA NUESTRAS CLASES EN HTML */}
            {/* kebabcase para nombrar nuestras className en React con minúsculas */}
            <nav className="header"> {/* BLOQUE */}
                <NavLink className="header__logo" to="/">LOGO</NavLink>
                <ul className="header__nav-list">
                    <li className="header__list-item">
                        <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/home">Home</NavLink>
                    </li>
                    <li className="header__list-item">
                        <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/dashboard">Dashboard</NavLink>
                    </li>
                    {isAuth ? (
                        <>
                            <li className="header__list-item">
                                <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/secret">Secret</NavLink>
                            </li>
                            <li className="header__list-item">
                                <NavLink className="header__item-link" onClick={logout}>Logout</NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="header__list-item">
                                <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/login">Login</NavLink>
                            </li>
                            <li className="header__list-item">
                                <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/signup">Signup</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Header;
