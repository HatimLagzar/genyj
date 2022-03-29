import React from "react";
import './Newsletter.scss'

export default function Newsletter() {
	return <section id={'newsletter'} className={'section-push'}>
		<h3 className='text-center section-title'>Stay Tuned</h3>
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-sm-12 mx-auto">
					<p>Subscribe to our mailing list to stay updated, you will get notified about our new products and discount.</p>
					<form action="#" method={'POST'}>
						<div className="form-group">
							<input type="email" className="form-control" placeholder={'Email Address'} />
						</div>
						<button className="btn btn-dark">Subscribe</button>
					</form>
				</div>
			</div>
		</div>
	</section>
}
