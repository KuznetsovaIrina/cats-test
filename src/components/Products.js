import React, { useState, useEffect } from 'react';
import Product from './Product'
import Loader from './Loader';
// import {productsData} from './../data';

function Products() {
  const title = 'Ты сегодня покормил кота?';
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://api.dzazen.ru/products")
      .then((responce) => responce.json())
      .then((data) => {
        setProducts(JSON.parse(data));
        setInterval(() => {
          setLoading(false);
        }, 500)
      })
  }, []);

  const switchSelectedStatus = (id) => setProducts([
    ...products.map(p => p.id === id ? {...p, isSelected: !p.isSelected} : p)
  ])

  return (
    <section className='products'>
        <div className='products__centering'>
          <div className='products__box'>
            { !loading && products
              ? <>
                <h1 className='text-center'>
                  {title}
                </h1>
                <div className='products__list'>
                  { products.map( p => <Product switchSelectedStatus={switchSelectedStatus} key={p.id} product={p} /> ) }
                </div>
                </>
              : <Loader />
            }
        </div>
        </div>
    </section>
  )
}

export default Products;
