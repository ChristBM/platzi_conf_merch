/** @format */

import React from 'react'
import remove_from_cart from '../../assets/images/remove_shopping_cart_black_24dp.svg'

export default function CheckoutItem({ item, handleRemove }) {
	return (
		<div className='checkout__item'>
			<div className='checkout__item_texts'>
				<h4 className='checkout__item_title'>{item.title}</h4>
				<span className='checkout__item_price'>${item.price}</span>
			</div>
			{handleRemove !== null ? (
				<button
					type='button'
					className='checkout__item_btn-delete'
					onClick={() => handleRemove(item)}
				>
					<img
						src={remove_from_cart}
						alt='remove from cart icon'
						className='checkout__item_btn-icon'
					/>
				</button>
			) : null}
		</div>
	)
}
