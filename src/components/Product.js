import React, { useState } from 'react';
import ProductBonuses from './ProductBonuses';

function Product({product, switchSelectedStatus}) {
  const [slogon, setSlogon] = useState(product.slogon);
  const [disabledHover, setDisabledHover] = useState(false);

  const selectedClass = product.isSelected ? 'is-selected' : '';
  const disabledClass = product.isDisabled ? 'is-disabled' : '';
  const endedText = 'Печалька, #taste# закончился.';
  const endedTextFormat = endedText.replace('#taste#', product.taste);
  const slogonSelectedProductHover = 'Котэ не одобряет?';
  const unit = 'кг';
  const buyText = 'Чего сидишь? Порадуй котэ,';
  const buyButtonText = 'купи.'

  const switchProduct = (isButtonClick) => {
    !product.isDisabled && switchSelectedStatus(product.id);
    !isButtonClick && setDisabledHover(true);
    
    if (product.isSelected) {
      setSlogon(product.slogon);
    }

  }

  const onHover = () => {
    (product.isSelected && !product.isDisabled) && setSlogon(slogonSelectedProductHover);
  }

  const unHover = () => {
    (product.isSelected && !product.isDisabled) && setSlogon(product.slogon);
    setDisabledHover(false);
  }

  return (
      <div className={`product ${disabledHover ? 'is-hover-disabled' : ''} ${selectedClass} ${disabledClass}`}>
        <div onMouseEnter={onHover} onMouseLeave={unHover} onClick={() => {switchProduct(false)}} className='product__wrap'>
          
          <div className='product__info'>
            <div className='product__slogon'>
              {slogon}
            </div>

            <h3 className='product__title'>
              <b>{product.title}</b>
              <span>{product.taste}</span>
            </h3>
            
            <ProductBonuses
              portions={product.portionNumber}
              mices={product.miceNumber}
              bonuses={product.bonuses} />
          </div>
          
          <div className='product__bottom'>
            <div className='product__weight'>
              <b>{new Intl.NumberFormat().format(product.weight)}</b>
              { unit }
            </div>
            
            <img className='product__image' src={product.image.url} alt={product.image.alt} />
          </div>
        </div>
        
        <p className='product__select'>
          { product.isDisabled
            ? endedTextFormat
            : product.isSelected
              ? product.description
              : <>
                {buyText}
                <a onClick={() => {switchProduct(true)}} className='is-style-link'>{buyButtonText}</a>
                </> }
        </p>
      </div>
  )
}

export default Product;
