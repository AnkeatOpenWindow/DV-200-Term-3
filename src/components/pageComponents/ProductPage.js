import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const ProductPage = () => {

  let navigate = useNavigate();
  
  let productId = sessionStorage.getItem("productId");

  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    productDesc: "",
    productStock: "",
    varOne:"",
    varTwo:"",
    varThree:"",
  });

  const backHome = () =>{
    sessionStorage.clear();
    navigate("/");
  }
  
  useEffect(() => {
    Axios.get('http://localhost:5000/api/oneproduct/' + productId)
      .then(res => {
        let data = res.data;
        setProductData({
          productName: data.name,
          productPrice: data.price,
          productDesc: data.description,
          productStock: data.stock,
          varOne: data.variations.red,
          varTwo: data.variations.green,
          varThree: data.variations.blue
        });
      })
  }, []);
  

  return (
    <div>
        <Button onClick={backHome} variant="contained" size="small">Back To Home</Button>
        <h3>Available Stock: {productData.productStock} Units</h3>
        <h1>{productData.productName}</h1>
        <p>Product Description:</p>
        <p>{productData.productDesc}</p>
        <h3>Variations In Stock</h3>
        <p>Red: {productData.varOne}</p>
        <p>Green: {productData.varTwo}</p>
        <p>Blue: {productData.varThree}</p>
    </div>
  )
}

export default ProductPage
