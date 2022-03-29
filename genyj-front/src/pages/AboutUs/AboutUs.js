import React from 'react'
import "./AboutUs.scss"
import Navbar from "../../components/Navbar/Navbar";
import SocialNetworkIcons from "../../components/SocialNetworkIcons/SocialNetworkIcons";


export default function AboutUs() {
	return <>
		<Navbar />
		<section id="about-us-page" className={'section-push'}>
			<h1 className="section-title text-center">About Us</h1>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-12">
						<div className="brand-wrapper">
							<img src="/img/cover.jpg" alt="GenYJ Logo" />
						</div>
					</div>
					<div className="col-lg-6 col-12">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis dolor dolorem eaque eius eum fuga, illo libero maiores nihil nisi obcaecati reiciendis tempora tenetur unde. Architecto distinctio laborum voluptas.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis dolor dolorem eaque eius eum fuga, illo libero maiores nihil nisi obcaecati reiciendis tempora tenetur unde. Architecto distinctio laborum voluptas.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis dolor dolorem eaque eius eum fuga, illo libero maiores nihil nisi obcaecati reiciendis tempora tenetur unde. Architecto distinctio laborum voluptas.</p>
					</div>
				</div>
			</div>
		</section>
	</>
}
