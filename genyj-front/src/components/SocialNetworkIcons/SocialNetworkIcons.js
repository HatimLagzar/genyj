import React from "react";
import "./SocialNetworkIcons.scss"

export default function SocialNetworkIcons() {
	return <div className={'social-network-icons'}>
		<h3 className={"section-title"}>GenYJ On Social Networks</h3>
		<ul className={"list-unstyled"}>
			<li><i className="fab fa-facebook-square"/></li>
			<li><i className="fab fa-instagram-square"/></li>
			<li><i className="fab fa-youtube-square"/></li>
			<li><i className="fab fa-twitter-square"/></li>
		</ul>
	</div>;
}
