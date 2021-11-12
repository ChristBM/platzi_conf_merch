/** @format */

import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '@contexts/GlobalContext'
import CheckoutItem from '@components/CheckoutItem'

export default function Information() {
	const { state, addToBuyer } = useContext(GlobalContext)
	const form = useRef(null)
	let navigate = useNavigate()
	const { cart } = state

	const handleSubmit = ev => {
		ev.preventDefault()
		const form_data = new FormData(form.current)
		const user_data = {
			name: form_data.get('name'),
			email: form_data.get('email'),
			phone: form_data.get('phone'),
			cp: form_data.get('cp'),
			apto: form_data.get('apto'),
			city: form_data.get('city'),
			state: form_data.get('state'),
			country: form_data.get('country'),
			address: form_data.get('address'),
		}

		addToBuyer(user_data)
		navigate('/checkout/payment')
	}

	return (
		<div className='information'>
			<div className='information__form_container'>
				<div className='information__form_header'>
					<h2 className='information__form_header_title'>Información de contacto</h2>
				</div>
				<form action='' className='information__form' ref={form}>
					<input
						className='information__form_input'
						type='text'
						placeholder='Nombre Completo'
						name='name'
					/>
					<input
						className='information__form_input'
						type='email'
						placeholder='Correo Electrónico'
						name='email'
					/>
					<input
						className='information__form_input'
						type='tel'
						placeholder='Teléfono'
						name='phone'
					/>
					<input
						className='information__form_input'
						type='text'
						placeholder='Código Postal'
						name='cp'
					/>
					<input
						className='information__form_input'
						type='text'
						placeholder='Apto'
						name='apto'
					/>
					<input
						className='information__form_input'
						type='text'
						placeholder='Ciudad'
						name='city'
					/>
					<input
						className='information__form_input'
						type='text'
						placeholder='Estado'
						name='state'
					/>
					<input
						className='information__form_input'
						type='text'
						placeholder='País'
						name='country'
					/>
					<input
						className='information__form_input'
						type='text'
						placeholder='Dirección'
						name='address'
					/>
				</form>
			</div>

			<div className='information__btn_container'>
				<button
					type='button'
					className='information__btn'
					onClick={() => navigate('/checkout')}
				>
					Regresar
				</button>
				<button type='button' className='information__btn' onClick={handleSubmit}>
					Pagar
				</button>
			</div>

			<div className='information__sidebar'>
				<h3 className='information__sidebar_title'>Pedidos</h3>

				{cart.map(item => (
					<CheckoutItem
						key={`${item.title}-${Math.random()}`}
						item={item}
						handleRemove={null}
					/>
				))}
			</div>
		</div>
	)
}
