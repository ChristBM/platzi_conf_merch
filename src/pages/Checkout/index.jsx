/** @format */

import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '@contexts/GlobalContext'
import CheckoutItem from '@components/CheckoutItem'

export default function Checkout() {
	const { removeFromCart, state } = useContext(GlobalContext)
	const { cart } = state
	let navigate = useNavigate()

	const handleRemove = product => {
		removeFromCart(product)
	}

	const handleSumTotal = () => cart.reduce((acc, cur) => acc + cur.price, 0)

	return (
		<div className='checkout'>
			<div className='checkout__container'>
				{cart.length > 0 ? (
					<h3 className='checkout__title'>Lista de Pedidos</h3>
				) : (
					<h3 className='checkout__title'>Sin Pedidos</h3>
				)}

				{cart.map(item => (
					<CheckoutItem
						key={`${item.title}-${Math.random()}`}
						item={item}
						handleRemove={handleRemove}
					/>
				))}
			</div>

			{cart.length > 0 ? (
				<div className='checkout__sidebar'>
					<h3 className='checkout__sidebar_total'>Price Total: $ {handleSumTotal()}</h3>
					<button
						type='button'
						className='checkout__sidebar_btn-continue'
						onClick={() => navigate('/checkout/information')}
					>
						Continuar
					</button>
				</div>
			) : null}
		</div>
	)
}
