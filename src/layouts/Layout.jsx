/** @format */

import React from 'react'
import Header from '@containers/Header'
import Footer from '@containers/Footer'

export default function Layout({ children }) {
	return (
		<div className='layout'>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
