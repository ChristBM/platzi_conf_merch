/** @format */

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import GlobalContext from '@contexts/GlobalContext'
import platzi_conf_logo from '@assets/images/logo.webp'
import shopping_cart from '../../assets/images/shopping_cart_black_24dp.svg'

export default function Header() {
	const { state } = useContext(GlobalContext)
	const { cart } = state

	return (
		<div className='header'>
			<Link to='/' className='header__link'>
				<img
					src={platzi_conf_logo}
					alt='platzi conf logo'
					className='header__title_logo'
				/>
			</Link>
			<div className='header__checkout'>
				<Link to='/checkout' className='header__link'>
					<img
						src={shopping_cart}
						alt='platzi conf logo'
						className='header__checkout_cart'
					/>
				</Link>
				{cart.length ? <div className='header__checkout_cant'>{cart.length}</div> : null}
			</div>
		</div>
	)
}
