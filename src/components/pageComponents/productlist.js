import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Axios from 'axios';
import ProductCardtwo from '../uiComponents/productCardtwo';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function Admin() {

  // Read all the DB Items 


  const [readProducts, setReadProducts] = useState();
  const [renderProducts, setRenderProducts] = useState(false);

  useEffect(() => {
    Axios.get('http://localhost:5000/api/allproducts')
      .then(res => {
        let data = res.data;
        const productItem = data.map((item) => <ProductCardtwo key={item._id} productId={item._id} name={item.name} price={item.price} desc={item.description} stock={item.stock} varOne={item.variations.black} varTwo={item.variations.red} varThree={item.variations.blue} editRender={setRenderProducts} />);
        setReadProducts(productItem);
        setRenderProducts(false);
      });
  }, [renderProducts]);


  let defaultFormVals = ["name", "price", "description", "varOne", "varTwo", "varThree"];

  const [formValues, setFormValues] = useState(defaultFormVals);

  const getValues = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const addProduct = (e) => {
    e.preventDefault();

    var stock = +formValues['varOne'] + +formValues['varOne'] + +formValues['varThree'];

    let payload = {
      name: formValues['name'],
      price: +formValues['price'],
      stock: stock,
      description: formValues['description'],
      variations: {
        black: +formValues['varOne'],
        red: +formValues['varTwo'],
        blue: +formValues['varThree'],
      }
    }

    Axios.post('http://localhost:5000/api/newProduct', payload)
      .then((res) => {
        if (res) {
          console.log("Item Added");
          setRenderProducts(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div className='container' style={{ marginTop: "30px" }}>
      <h1>The Motorbike wings: Products</h1>
      <Grid container spacing={1} style={{ marginLeft: "70px",}}>
        {readProducts}
      </Grid>
    </div>
  );
}

export default Admin;
