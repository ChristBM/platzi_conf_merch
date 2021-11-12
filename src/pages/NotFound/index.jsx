/** @format */

import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

export default function NotFound() {
	return (
		<div className='not_found'>
			<Player
				autoplay
				loop
				src='https://assets3.lottiefiles.com/private_files/lf30_fmboyzyz.json'
				style={{ height: '500px', width: '500px' }}
			></Player>
		</div>
	)
}
