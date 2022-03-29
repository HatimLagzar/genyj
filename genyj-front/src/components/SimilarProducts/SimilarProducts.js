import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import "./SimilarProducts.scss"

export default function SimilarProducts() {
	return <section className={'section-push'} id={'similar-products'}>
		<div className='container'>
			<h3 className='section-title'>Produits Similaires</h3>
			<div className='row'>
				<div className='col-lg-3 col-sm-3 col-6'>
					<ProductItem showWashingDegrees={false} />
				</div>
				<div className='col-lg-3 col-sm-3 col-6'>
					<ProductItem showWashingDegrees={false} />
				</div>
				<div className='col-lg-3 col-sm-3 col-6'>
					<ProductItem showWashingDegrees={false} />
				</div>
				<div className='col-lg-3 col-sm-3 col-6'>
					<ProductItem showWashingDegrees={false} />
				</div>
			</div>
		</div>
	</section>
}
