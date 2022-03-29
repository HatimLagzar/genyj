import React from "react";
import "./ContactPage.scss"
import Navbar from "../../components/Navbar/Navbar";
import ContactUs from "../../components/ContactUs/ContactUs";

export default function ContactPage() {
	return <>
		<Navbar />
		<section id="contact-us-page" className={'section-push'}>
			<ContactUs />
		</section>
	</>
}
