import React from 'react'
import './NavbarLogo.scss'
import {Link} from "react-router-dom";
export default function NavbarLogo() {
	return <Link to={'/'} className="navbar-brand" href="#"><img src={'/img/logo.png'}  alt={'Logo'}/></Link>
}
