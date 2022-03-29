import React from "react"
import "./Footer.scss"
import SocialNetworkIcons from "../SocialNetworkIcons/SocialNetworkIcons"

export default function Footer() {
	return <footer id={'footer'} className={'section-push'}>
		<div className="container">
			<div className="row justify-content-between">
				<div className="col-lg-5 col-sm-6 col-xs-12">
					<h3 className={'section-title'}>Qui sommes-nous ?</h3>
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when
						looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
						letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
				</div>
				<div className="col-lg-5 col-sm-6 col-xs-12">
					<SocialNetworkIcons/>
				</div>
			</div>
		</div>
	</footer>
}
