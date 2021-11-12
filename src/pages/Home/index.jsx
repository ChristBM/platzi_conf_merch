/** @format */

import React from 'react'
import Products from '@containers/Products'
import initialState from '../../initialState.js'
import { Helmet } from 'react-helmet'

export default function Home() {
	return (
		<>
			<Helmet>
				<title>Platzi Conf Merch - Porducts</title>
				<meta name='description' content='Una tienda de utilería de la platzi conf.' />
				<meta name='author' content='Christian Boffill' />
				<meta
					name='keywords'
					content='E-commerce, HTML, SCSS, JavaScript, Webpack, React'
				/>
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@boffill_' />
				<meta name='twitter:creator' content='@boffill_' />
				<meta name='twitter:title' content='Platzi Conf Store' />
				<meta name='twitter:description' content='Platzi Conf Store' />
				<meta property='og:title' content='Platzi Conf Store' />
				<meta property='og:description' content='Platzi Conf Store' />
				<meta property='og:url' content='platzistore.xyz' />
				<meta property='og:site_name' content='Platzi Conf Store' />
				<meta property='og:locale' content='es_ES' />
				<meta property='og:type' content='article' />
				<meta property='fb:app_id' content='ID_APP_FACEBOOK' />
			</Helmet>

			<Products products={initialState.products} />
		</>
	)
}

/* <title>Platzi Conf Merch - Porducts</title>
				<meta name="twitter:card" content="summary_large_image"/>
				<meta name="twitter:site" content="@TU_USER"/>
				<meta name="twitter:creator" content="@TU_USER"/>
				<meta name="twitter:title" content="Platzi Conf Store"/>
				<meta name="twitter:description" content="Platzi Conf Store"/>
				<meta
					name="twitter:image"
					content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
				/>
				<meta property="og:title" content="Platzi Conf Store"/>
				<meta property="og:description" content="Platzi Conf Store"/>
				<meta
					property="og:image"
					content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
				/>
				<meta property="og:url" content="platzistore.xyz" />
				<meta property="og:site_name" content="Platzi Conf Store" />
				<meta property="og:locale" content="es_ES" />
				<meta property="og:type" content="article" />
				<meta property="fb:app_id" content="ID_APP_FACEBOOK" /> */
