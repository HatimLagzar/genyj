import React from "react";
import './Header.scss'
import Navbar from "../Navbar/Navbar";
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import {Link} from "react-router-dom";

export default function Header() {
	return <header>
		<HeaderContainer>
			<Navbar/>

			<h1 className={'text-lg-center'}>Simple jean<br/>
				fabriqués par des profesionnels<br/>
				pour les profesionnels !
			</h1>

			<h2 className={'text-lg-center'}>
				Des jeans comfortables de trés hautes qualités pour un prix raisonnable. <br/>
				Ils vient en plusieurs couleurs, plusieurs degré de delavage et tailles et slim selon votre gout.
			</h2>

			<div className="call-to-action text-center">
				<Link to={'/store'} id={'explore-products'} className={'hvr-shutter-out-horizontal'}>Decouvrez nos produits</Link>
				<span className={'d-block'}>Satisfait ou remboursé</span>
			</div>
		</HeaderContainer>
	</header>
}
