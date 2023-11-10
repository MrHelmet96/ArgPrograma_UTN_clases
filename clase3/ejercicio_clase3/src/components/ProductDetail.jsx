
import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
      <p>SKU: {product.sku}</p>
      <p>Cantidad Disponible: {product.quantity}</p>
    </div>
  );
}

export default ProductDetail;
