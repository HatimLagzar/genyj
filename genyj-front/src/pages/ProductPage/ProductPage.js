import React, { useEffect, useState } from 'react';
import './ProductPage.scss';
import Navbar from '../../components/Navbar/Navbar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import RadioInput from '../../components/RadioInput/RadioInput';
import ContactUs from '../../components/ContactUs/ContactUs';
import { findById } from '../../api/product/productApi';
import ProductExtraImage from '../../components/ProductExtraImage';
import { useDispatch, useSelector } from 'react-redux';
import { setLength, setProductId, setSize, setSlim } from '../../app/features/order/orderSlice';
import orderService from '../../app/services/order/OrderService';

export default function ProductPage() {
  const dispatch = useDispatch();
  const orderState = useSelector(state => state.order);
  const [product, setProduct] = useState(null);
  const navigator = useNavigate()

  const { id } = useParams();

  useEffect(() => {
    if (product === null) {
      findById(id).then(response => {
        setProduct(response.data.product);
        dispatch(setProductId(id));
      });
    }

    const selectedSlimRadioInputNode = document.querySelector(
      '[name="slim"]:checked');
    if (selectedSlimRadioInputNode instanceof HTMLElement) {
      dispatch(setSlim(selectedSlimRadioInputNode.value));
    }

    const selectedLengthRadioInputNode = document.querySelector(
      '[name="length"]:checked');
    if (selectedLengthRadioInputNode instanceof HTMLElement) {
      dispatch(setLength(selectedLengthRadioInputNode.value));
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (orderService.validate(orderState) === false) {
      return;
    }

    orderService.createOrder(orderState).then(response => {
      const order = response.data.order
      navigator('/order/' + order.id)
    });
  }

  return (product !== null ? (<>
    <section id={'product-page'}>
      <Navbar />
      <section className={'section-push'} id={'product-details'}>
        <div className='container'>
          <Link to={'/store'} id={'back-to-store'}
                className={'btn btn-outline-dark mx-0'}>
            <i className={'fas fa-chevron-left me-2'} /> Back to store
          </Link>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='thumbnail-wrapper'>
                <img className={'product-img w-100'}
                     src={product.thumbnail}
                     alt='Black Black Jean' />
              </div>
              <div className='extra-images'>
                <div className='row'>
                  {product.extraImages && product.extraImages.length > 0
                    ? product.extraImages.map(
                      image => <ProductExtraImage image={image} />)
                    : ''}
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <form onSubmit={handleSubmit} noValidate={true}>
                <h1 className={'product-title'}>
                  {product.title}
                </h1>
                <div className='price'>
                  {
                    parseFloat(product.discount) > 0
                      ?
                      <>
                        <span className='current-price'>{product.priceDiscountedFormatted}</span>
                        <span className='old-price'>{product.priceFormatted}</span>
                      </>
                      : <span className='current-price'>{product.priceFormatted}</span>
                  }
                </div>

                <div className='available-sizes'>
                  <h2 className={'washing-degree-title'}>Taille</h2>
                  {product.variants && product.variants.length > 0
                    ? product.variants.map((variant, index) => <RadioInput
                      key={index}
                      id={'size-' + variant.size}
                      text={variant.size}
                      name={'size'}
                      value={variant.size}
                      required={true}
                      handleChange={e => dispatch(
                        setSize(e.currentTarget.value))}
                    />)
                    : ''}
                </div>

                <div className='available-slims'>
                  <h2 className={'washing-degree-title'}>slim</h2>
                  <RadioInput
                    id={'slim-14'}
                    text={'14'}
                    name={'slim'}
                    value={'14'}
                    handleChange={e => dispatch(
                      setSlim(e.currentTarget.value))}
                  />
                  <RadioInput
                    id={'slim-15'}
                    text={'15'}
                    name={'slim'}
                    value={'15'}
                    handleChange={e => dispatch(
                      setSlim(e.currentTarget.value))}
                  />
                  <RadioInput
                    id={'slim-16'}
                    text={'16'}
                    name={'slim'}
                    value={'16'} handleChange={e => dispatch(
                    setSlim(e.currentTarget.value))}
                  />
                  <RadioInput
                    id={'slim-17'}
                    text={'17 (standard)'}
                    name={'slim'}
                    value={'17'}
                    checked
                    handleChange={e => dispatch(
                      setSlim(e.currentTarget.value))}
                  />
                  <RadioInput
                    id={'slim-18'}
                    text={'18'}
                    name={'slim'}
                    value={'18'}
                    handleChange={e => dispatch(
                      setSlim(e.currentTarget.value))}
                  />
                  <RadioInput
                    id={'slim-19'}
                    text={'19'}
                    name={'slim'}
                    value={'19'}
                    handleChange={e => dispatch(
                      setSlim(e.currentTarget.value))}
                  />
                  <RadioInput
                    id={'slim-20'}
                    text={'20'}
                    name={'slim'}
                    value={'20'}
                    handleChange={e => dispatch(
                      setSlim(e.currentTarget.value))}
                  />
                </div>

                <div className='available-height'>
                  <h2 className={'washing-degree-title'}>Longueur</h2>
                  <RadioInput
                    id={'height-12'}
                    text={'92cm'}
                    name={'length'}
                    value={'92'}
                    handleChange={e => dispatch(
                      setLength(e.currentTarget.value))}
                  />
                  <RadioInput
                    id={'height-13'} text={'95cm'}
                    name={'length'}
                    value={'95'}
                    handleChange={e => dispatch(
                      setLength(e.currentTarget.value))}
                  />
                  <RadioInput
                    id={'height-14'} text={'98cm'}
                    name={'length'}
                    value={'98'}
                    handleChange={e => dispatch(
                      setLength(e.currentTarget.value))}
                  />
                  <RadioInput
                    id={'height-15'}
                    text={'100cm (standard)'}
                    name={'length'}
                    value={'100'}
                    checked
                    handleChange={e => dispatch(
                      setLength(e.currentTarget.value))}
                  />
                  <RadioInput
                    id={'height-16'}
                    text={'103cm'}
                    name={'length'}
                    value={'103'}
                    handleChange={e => dispatch(
                      setLength(e.currentTarget.value))}
                  />
                  <RadioInput
                    id={'height-17'}
                    text={'106cm'}
                    name={'length'}
                    value={'106'}
                    handleChange={e => dispatch(
                      setLength(e.currentTarget.value))}
                  />
                  <RadioInput
                    id={'height-18'}
                    text={'110cm'}
                    name={'length'}
                    value={'110'}
                    handleChange={e => dispatch(
                      setLength(e.currentTarget.value))}
                  />
                  <RadioInput
                    id={'height-19'}
                    text={'115cm'}
                    name={'length'}
                    value={'115'}
                    handleChange={e => dispatch(
                      setLength(e.currentTarget.value))}
                  />
                </div>

                <div className='call-to-action'>
                  <button
                    type={'submit'} role={'submit'}
                    className={'btn btn-dark'}
                  >
                    Acheter Maintenant
                  </button>
                  {/*<button className={'btn btn-outline-dark'}>Ajouter Au Panier</button>*/}
                </div>
              </form>

              <div className='description'>
                <h2>Description</h2>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<SimilarProducts/>*/}
      <ContactUs />
    </section>
  </>) : '');
}
