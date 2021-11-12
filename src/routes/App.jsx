/** @format */

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalContext from '@contexts/GlobalContext'
import useGlobalStates from '@hooks/useGlobalStates'
import Layout from '@layouts/Layout'
import Home from '@pages/Home'
import Checkout from '@pages/Checkout'
import Information from '@pages/Information'
import Payment from '@pages/Payment'
import Success from '@pages/Success'
import NotFound from '@pages/NotFound'

export default function App() {
	const globalStates = useGlobalStates()

	return (
		<GlobalContext.Provider value={globalStates}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/checkout' element={<Checkout />} />
						<Route path='/checkout/information' element={<Information />} />
						<Route path='/checkout/payment' element={<Payment />} />
						<Route path='/checkout/success' element={<Success />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</GlobalContext.Provider>
	)
}
