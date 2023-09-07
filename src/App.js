import './App.css';
import logo from './logo.svg';
import Landing from './components/pageComponents/landing';
import { Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Footer from './components/footer';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Admin from './components/pageComponents/Admin';
import Productlist from './components/pageComponents/productlist';
import ProductPage from './components/pageComponents/ProductPage';
import ProductPageTwo from './components/pageComponents/ProductPagetwo';
import Orderpage from './components/pageComponents/orderpage';
import Cart from './components/pageComponents/Cart';
//import List from './components/pageComponents/List';
//import Main from './components/Main';
import Signup from './components/Singup';
import Login from './components/Login';



function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      
      <Routes>
        <Route path='/landing' element={<Landing />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/productlist' element={<Productlist />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/productpagetwo" element={<ProductPageTwo />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path='/orderpage' element={<Orderpage/>}/>
        
        
        
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/' exact element={<Login />} />
        
      </Routes>
     

    </div>
  );
}

export default App;
