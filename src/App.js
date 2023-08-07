import './App.css';
import logo from './logo.svg';
import Landing from './pages/landing';
import Product from './pages/product';
import Administrator from './pages/administrator';
import {Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/> }/>
        <Route path='/product' element={<Product/> }/>
        <Route path='/administrator' element={<Administrator/> }/>
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
