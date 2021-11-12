/** @format */

import React, { useState, useContext } from 'react'
import GlobalContext from '@contexts/GlobalContext'
import ReactMapGL from 'react-map-gl'
import pass from '../../pass'

export default function Success() {
	const [viewport, setViewport] = useState({
		width: 320,
		height: 400,
		latitude: 37.7577,
		longitude: -122.4376,
		zoom: 8,
	})

	const { state } = useContext(GlobalContext)
	const { buyer } = state

	const { reactMapboxToken } = pass

	return (
		<div className='success'>
			<div className='success__container'>
				<h2 className='success__title'>{`${buyer[0].name}, gracias por tu compra`}</h2>
				<span className='success__subtitle'>
					Tu pedido llegará en 3 días a tu dirección
				</span>
				<div className='success__map'>
					<ReactMapGL
						{...viewport}
						mapStyle='mapbox://styles/mapbox/dark-v9'
						onViewportChange={nextViewport => setViewport(nextViewport)}
						mapboxApiAccessToken={reactMapboxToken}
					/>
				</div>
			</div>
		</div>
	)
}
