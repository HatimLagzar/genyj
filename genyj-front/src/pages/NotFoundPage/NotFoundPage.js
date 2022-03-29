import React from 'react'
import Navbar from "../../components/Navbar/Navbar";

export default function NotFoundPage() {
	return <>
		<Navbar />
		<div className={'container'}>
			<h1 className={'text-center section-push'}>404 Not Found.</h1>
		</div>
	</>
}
