import './App.css';
import logo from './logo.svg';
import Landing from './components/pageComponents/landing';
import {Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Admin from './components/pageComponents/Admin';
import Productlist from './components/pageComponents/productlist';
import ProductPage from './components/pageComponents/ProductPage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/> }/>
        <Route path='/admin' element={<Admin/> }/>
        <Route path='/productlist' element={<Productlist/> }/>
        <Route path="/productpage" element={<ProductPage/>} />
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
