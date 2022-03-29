import React from 'react';
import './Navbar.scss';
import NavbarLogo from '../NavbarLogo/NavbarLogo';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function Navbar() {
    const user = useSelector(state => state.auth.user)

    return <nav id={'main-nav'} className="navbar navbar-expand-lg">
        <NavbarLogo/>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <i className="fas fa-bars"/>
        </button>
        <div className="collapse navbar-collapse pt-lg-0 pt-3" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
                <Link className="nav-link hvr-underline-from-center" to={"/"}>Accueil</Link>
                <Link className="nav-link hvr-underline-from-center" to={"/store"}>Produits</Link>
                <Link className="nav-link hvr-underline-from-center" to={"/about"}>Qui sommes nous ?</Link>
                <Link className="nav-link hvr-underline-from-center" to={"/contact"}>Contactez-nous</Link>
            </div>
            {
                user !== null
                    ? (
                        <div className="navbar-nav ms-lg-3">
                            <Link className="nav-link hvr-underline-from-center" to={"/dashboard"}>Dashboard</Link>
                        </div>
                    )
                    : (
                        <div className="navbar-nav ms-lg-3">
                            <Link className="nav-link hvr-underline-from-center" to={"/login"}>Login</Link>
                            <Link className="nav-link hvr-underline-from-center" to={"/register"}>Register</Link>
                        </div>
                    )
            }

        </div>
    </nav>
}
