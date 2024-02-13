import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    const navigate = useNavigate();

    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout();

        navigate('/login', {
            replace: true // esto hace que una vez se de en logout no pueda acceder al registro anterior de la pagina y por tanto no entra en la parte donde esta el navbar
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">

            <Link
                className="navbar-brand"
                to="/"
            >
                Heroes
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        {user?.name }
                    </span>
                    <button className='nav-item nav-link text-info' onClick={handleLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}