import React from 'react'
import './HeaderContainer.scss'

export default function HeaderContainer({children}) {
	return <div className='header-container'>
		{children}
	</div>
}
