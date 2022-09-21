import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Components/Products';
import Shopping from './Components/Shopping';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/products/:category/:id" element={<Shopping />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
