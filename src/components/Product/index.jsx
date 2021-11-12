/** @format */

import React from 'react'

export default function Product({ product, handleAddToCart }) {
	return (
		<div className='product'>
			<div className='product__image_container'>
				<img src={product.image} alt={product.title} className='product__image' />
			</div>
			<div className='product__info'>
				<h2 className='product__info_title'>
					{product.title}
					<span className='product__info_price'>${product.price}</span>
				</h2>
				<p className='product__info_description'>{product.description}</p>
			</div>
			<button
				type='button'
				className='product__btn-comprar'
				onClick={() => handleAddToCart(product)}
			>
				Agregar al Carrito
			</button>
		</div>
	)
}
