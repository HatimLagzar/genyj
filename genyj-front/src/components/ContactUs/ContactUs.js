import React from "react";
import "./ContactUs.scss"

export default function ContactUs() {
	return <section id={'contact-us'} className={'section-push'}>
		<h3 className='text-center section-title'>Contact Us</h3>
		<div className="container">
			<div className="col-lg-6 col-sm-12 mx-auto">
				<form action="#" method={'POST'}>
					<div className="form-group">
						<input type="text" className="form-control" placeholder={'Name'} />
					</div>
					<div className="form-group">
						<input type="text" className="form-control" placeholder={'Subject'} />
					</div>
					<div className="form-group">
						<input type="email" className="form-control" placeholder={'Email Address'} />
					</div>
					<div className="form-group">
						<textarea className="form-control" placeholder={'Message'} />
					</div>
					<button className="btn btn-dark">Send</button>
				</form>
			</div>
		</div>
	</section>
}
