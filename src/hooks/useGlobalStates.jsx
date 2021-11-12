/** @format */

import React, { useState } from 'react'
import initialState from '../initialState'

export default function useGlobalStates() {
	const [state, setState] = useState(initialState)

	const addToCart = payload => {
		setState({
			...state,
			cart: [...state.cart, payload],
		})
	}

	const removeFromCart = payload => {
		setState({
			...state,
			cart: state.cart.filter(item => item.id !== payload.id),
		})
	}

	const deleteCart = () => {
		setState({
			...state,
			cart: [],
		})
	}

	const addToBuyer = payload => {
		setState({
			...state,
			buyer: [...state.buyer, payload],
		})
	}

	const addNewOrder = payload => {
		setState({
			...state,
			orders: [...state.orders, payload],
		})
	}

	return { addToCart, removeFromCart, state, addToBuyer, addNewOrder, deleteCart }
}
