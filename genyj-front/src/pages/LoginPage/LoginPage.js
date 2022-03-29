import React from 'react';
import './LoginPage.scss';
import Navbar from '../../components/Navbar/Navbar';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage() {
	return <>
		<Navbar />
		<section id="login-page" className={'section-push'}>
			<div className="container">
				<h1 className={'text-center section-title'}>Sign In</h1>
				<LoginForm />
			</div>
		</section>
	</>
}
