import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';


const ProductCard = (props) => {

  
  

  let navigate = useNavigate();

  const toProduct = () => {
    sessionStorage.setItem('productId', props.productId);
    navigate('/productpagetwo');
  }

  



  return (
    <Grid item xs={5} style={{marginRight: " 20px", marginBottom: "10px"}}>
      <Card sx={{ minWidth: 275 }} >
        <CardContent>
          {/* add image here */}
          <br></br>
          <Typography variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <b>Price:</b> R {props.price}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Availability:</b> {props.stock}
          </Typography>
          <Typography variant="body2">
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={toProduct} variant="contained" size="small" >View Product</Button>
        </CardActions>
      </Card>
      
    </Grid>
    
  )
}

export default ProductCard
