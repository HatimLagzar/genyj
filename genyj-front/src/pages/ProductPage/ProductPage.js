import React from 'react'
import "./ProductPage.scss"
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import RadioInput from "../../components/RadioInput/RadioInput";
import ContactUs from "../../components/ContactUs/ContactUs";
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';

export default function ProductPage() {
	return <>
		<section id={'product-page'}>
			<Navbar />
			<section className={'section-push'} id={'product-details'}>
				<div className="container">
					<Link to={"/store"} id={'back-to-store'} className={'btn btn-outline-dark mx-0'}>
						<i className={'fas fa-chevron-left me-2'} /> Back to store
					</Link>
					<div className="row">
						<div className="col-lg-6">
							<div className="thumbnail-wrapper">
								<img className={'product-img w-100'} src="/img/black.png" alt="Black Black Jean" />
							</div>
							<div className="extra-images">
								<div className="row">
									<div className="col-4">
										<div className="extra-image-wrapper">
											<img className={'w-100'} src="/img/black.png" alt="Black Black Jean" />
										</div>
									</div>
									<div className="col-4">
										<div className="extra-image-wrapper">
											<img className={'w-100'} src="/img/black.png" alt="Black Black Jean" />
										</div>
									</div>
									<div className="col-4">
										<div className="extra-image-wrapper">
											<img className={'w-100'} src="/img/black.png" alt="Black Black Jean" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<h1 className={'product-title'}>
								Simple Ocean Blue Jeans for men, 100% comfortable and professional.
							</h1>
							<div className="price">
								<span className="current-price">MAD 239</span>
								<span className="old-price">MAD 400</span>
							</div>

							<div className="available-degrees">
								<h2 className={'washing-degree-title'}>Washing Degrees</h2>
								<RadioInput
									id={'washing-degree-raw'}
									text={'raw'}
									name={'washing-degree'}
									value={'RAW'}
								/>

								<RadioInput
									id={'washing-degree-light'}
									text={'light'}
									name={'washing-degree'}
									value={'LIGHT'}
									checked
								/>

								<RadioInput
									id={'washing-degree-medium'}
									text={'medium'}
									name={'washing-degree'}
									value={'MEDIUM'}
								/>

								<RadioInput
									id={'washing-degree-hard'}
									text={'hard'}
									name={'washing-degree'}
									value={'HARD'}
								/>

							</div>

							<div className="available-sizes">
								<h2 className={'washing-degree-title'}>Taille</h2>
								<RadioInput id={'size-31'} text={'31'} name={'size'} value={'31'} disabled={true} />
								<RadioInput id={'size-32'} text={'32'} name={'size'} value={'32'} />
								<RadioInput id={'size-33'} text={'33'} name={'size'} value={'33'} />
								<RadioInput id={'size-34'} text={'34 (standard)'} name={'size'} value={'34'} checked />
								<RadioInput id={'size-35'} text={'35'} name={'size'} value={'35'} />
								<RadioInput id={'size-36'} text={'36'} name={'size'} value={'36'} />
								<RadioInput id={'size-37'} text={'37'} name={'size'} value={'37'} disabled={true} />
								<RadioInput id={'size-38'} text={'38'} name={'size'} value={'38'} />
								<RadioInput id={'size-39'} text={'39'} name={'size'} value={'39'} disabled={true} />
								<RadioInput id={'size-40'} text={'40'} name={'size'} value={'40'} />
								<RadioInput id={'size-41'} text={'41'} name={'size'} value={'41'} />
								<RadioInput id={'size-42'} text={'42'} name={'size'} value={'42'} disabled={true} />
							</div>

							<div className="available-slims">
								<h2 className={'washing-degree-title'}>Slimage</h2>
								<RadioInput id={'slimage-12'} text={'12'} name={'slimage'} value={'12'} />
								<RadioInput id={'slimage-13'} text={'13'} name={'slimage'} value={'13'} />
								<RadioInput id={'slimage-14'} text={'14'} name={'slimage'} value={'14'} />
								<RadioInput id={'slimage-15'} text={'15'} name={'slimage'} value={'15'} />
								<RadioInput id={'slimage-16'} text={'16'} name={'slimage'} value={'16'} />
								<RadioInput id={'slimage-17'} text={'17 (standard)'} name={'slimage'} value={'17'} checked />
								<RadioInput id={'slimage-18'} text={'18'} name={'slimage'} value={'18'} />
								<RadioInput id={'slimage-19'} text={'19'} name={'slimage'} value={'19'} />
								<RadioInput id={'slimage-20'} text={'20'} name={'slimage'} value={'20'} />
							</div>

							<div className="available-height">
								<h2 className={'washing-degree-title'}>Longueur</h2>
								<RadioInput id={'height-12'} text={'92cm'} name={'height'} value={'92'} />
								<RadioInput id={'height-13'} text={'95cm'} name={'height'} value={'95'} />
								<RadioInput id={'height-14'} text={'98cm'} name={'height'} value={'98'} />
								<RadioInput id={'height-15'} text={'100cm (standard)'} name={'height'} value={'100'} checked />
								<RadioInput id={'height-16'} text={'103cm'} name={'height'} value={'103'} />
								<RadioInput id={'height-17'} text={'106cm'} name={'height'} value={'106'} />
								<RadioInput id={'height-18'} text={'110cm'} name={'height'} value={'110'} />
								<RadioInput id={'height-19'} text={'115cm'} name={'height'} value={'115'} />
							</div>

							<div className="call-to-action">
								<button className={'btn btn-dark'}>Acheter</button>
								<button className={'btn btn-outline-dark'}>Ajouter Au Panier</button>
							</div>

							<div className="description">
								<h2>Description</h2>
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<SimilarProducts />
			<ContactUs />
		</section>
	</>
}
