import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import './App.css'


const productData = {
  name: 'Producto Ejemplo',
  description: 'Descripción del producto.',
  price: '$99.99',
  sku: 'ABC123',
  quantity: 10,
};

function App() {

  return (
    <>
      <Header />
      <ProductDetail product={productData} />
    </>
  )
}

export default App
