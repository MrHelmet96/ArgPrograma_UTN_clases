
import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    sku: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
    // Limpiar el formulario después de agregar el producto
    setProduct({
      name: '',
      description: '',
      price: '',
      sku: '',
      quantity: '',
    });
  };

  return (
    <div>
      <h2>Agregar Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={product.name} onChange={handleChange} />
        </label>
        <label>
          Descripción:
          <textarea name="description" value={product.description} onChange={handleChange} />
        </label>
        <label>
          Precio:
          <input type="text" name="price" value={product.price} onChange={handleChange} />
        </label>
        <label>
          SKU:
          <input type="text" name="sku" value={product.sku} onChange={handleChange} />
        </label>
        <label>
          Cantidad Disponible:
          <input type="text" name="quantity" value={product.quantity} onChange={handleChange} />
        </label>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default ProductForm;
