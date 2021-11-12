/** @format */

import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '@contexts/GlobalContext'
import CheckoutItem from '@components/CheckoutItem'
import { PayPalButton } from 'react-paypal-button-v2'
import pass from '../../pass.js'

export default function Payment() {
	const { state, addNewOrder, deleteCart } = useContext(GlobalContext)
	const { cart, buyer } = state
	let navigate = useNavigate()
	const clientID = pass.paypalPaymentClientID

	const paypalOptions = {
		clientId: clientID,
		intent: 'capture',
		currency: 'USD',
	}

	const buttonStyles = {
		layout: 'vertical',
		color: 'gold',
		shape: 'rect',
		label: 'paypal',
	}

	const handleSumTotal = () => cart.reduce((acc, cur) => acc + cur.price, 0)

	const handlePaymentSuccess = (details, data) => {
		console.log('Payment Data:', data)
		console.log('Payment Details:', details)

		if (details.status === 'COMPLETED') {
			const newOrder = {
				buyer: buyer,
				product: cart,
				payment: data,
			}
			addNewOrder(newOrder)
			navigate('/checkout/success')
			deleteCart()
		}
	}

	return (
		<div className='payment'>
			<div className='payment__container'>
				<div className='payment__resum'>
					<h3 className='payment__title'>Resumen del pedido:</h3>
					{cart.map(item => (
						<CheckoutItem
							key={`${item.title}-${Math.random()}`}
							item={item}
							handleRemove={null}
						/>
					))}
				</div>
				<div className='payment__btn'>
					<PayPalButton
						options={paypalOptions}
						style={buttonStyles}
						amount={handleSumTotal()}
						onButtonReady={() => console.log('Start Payment')}
						onSuccess={(details, data) => handlePaymentSuccess(details, data)}
						onError={err => console.log('Payment Error', err)}
						onCancel={data => console.log('Payment Cancel', data)}
					/>
				</div>
			</div>
		</div>
	)
}
