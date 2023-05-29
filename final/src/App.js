import './App.css';
import { Route, Routes } from 'react-router';
import { Home } from './components/Home';
import { Content } from './components/Content';
import { NotFound } from './components/NotFound';
import { Products } from './components/Products';
import { Productdetails } from './components/Productdetails';
import { MyNav } from './components/MyNav';
import { ProductForm } from './components/ProductForm';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Content" element={<Content />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Productdetails />} />
        <Route path="/products/:id/edit" element={<ProductForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
