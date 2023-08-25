import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//To show single page
const ProductPage = () => {

  let navigate = useNavigate();

  let productId = sessionStorage.getItem("productId");

  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    productDesc: "",
    productStock: "",
    varOne: "",
    varTwo: "",
    varThree: "",
  });

  const backHome = () => {
    sessionStorage.clear();
    navigate("/admin");
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
          varOne: data.variations.black,
          varTwo: data.variations.red,
          varThree: data.variations.blue
        });
      })
  }, []);


  return (
    <div className='container'>
      <Card style={{ marginTop: "30px" }}>
        <Row>
          <Col sm={6}>
            {/* Add image here */}
          </Col>
          <Col sm={6}>
            <Card.Body>
              <Card.Title style={{ textAlign: "left" }}>
                <h2>{productData.productName}</h2>
              </Card.Title>
              <Card.Text style={{ textAlign: "left" }}>
                <h5>Available Stock:</h5>
                <b>{productData.productStock}</b> Units
              </Card.Text >
              <Card.Text style={{ textAlign: "left" }}>
                <h5>Product Description:</h5>
                <p>{productData.productDesc}</p>
              </Card.Text>
              <Card.Text style={{ textAlign: "left" }}>
                <h5>Variations In Stock</h5>
                <p>
                  <b>Black:</b> {productData.varOne}
                </p>
                <p>
                  <b>Red:</b> {productData.varTwo}
                </p>
                <p>
                  <b>Blue:</b> {productData.varThree}
                </p>
              </Card.Text>
              <Card.Text style={{ textAlign: "left", marginRight: " 5px" }}>
                <Button onClick={backHome} style={{ marginRight: " 5px" }} variant="outlined" size="small" >Back To Home</Button>
                <Button variant="contained" size="small" >Buy</Button>
              </Card.Text>

            </Card.Body>
          </Col>
        </Row>


      </Card>
    </div>
  )
}

export default ProductPage
