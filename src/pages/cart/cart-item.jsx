import React from 'react';

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;

  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p>{productName}</p>
        <p>${price}</p>
      </div>
    </div>
  )
}


