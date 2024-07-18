import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './Product.module.css'
import { Link } from 'react-router-dom';

function ProductCard({product, flex}) {
    const {image, title, id, rating, price} = product;
  return (
    <div className={`${classes.card_container} ${flex?classes.product_flexed : ''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          {/* <Rating value={rating.rate} precision={0.1} /> */}
          <Rating value={rating ? rating.rate : 0} precision={0.1} />

          {/* <small>{rating.count}</small> */}
          <small>{rating ? `(${rating.count})` : "(0)"}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard