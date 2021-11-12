/** @format */

import React, { useContext } from 'react'
import GlobalContext from '@contexts/GlobalContext'
import Product from '@components/Product'

export default function Products() {
	const { addToCart, state } = useContext(GlobalContext)
	const { products } = state

	const handleAddToCart = product => {
		addToCart(product)
	}

	return (
		<div className='products'>
			<div className='products__items'>
				{products.map(product => (
					<Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
				))}
			</div>
		</div>
	)
}
