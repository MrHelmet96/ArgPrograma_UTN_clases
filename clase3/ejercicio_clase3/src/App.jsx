// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import ProductForm from './components/ProductForm';

const App = () => {
  const [products, setProducts] = useState([
    // Productos iniciales
    {
      name: 'Producto Ejemplo 1',
      description: 'Descripción del producto 1.',
      price: '$99.99',
      sku: 'ABC123',
      quantity: 10,
    },
    {
      name: 'Producto Ejemplo 2',
      description: 'Descripción del producto 2.',
      price: '$49.99',
      sku: 'DEF456',
      quantity: 5,
    },
  ]);

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div>
      <Header />
      <ProductForm onAddProduct={handleAddProduct} />
      {products.map((product, index) => (
        <ProductDetail key={index} product={product} />
      ))}
    </div>
  );
};

export default App;
