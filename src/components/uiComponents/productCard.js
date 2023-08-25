import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import EditProduct from '../uiComponents/EditProduct';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Axios from 'axios';


const ProductCard = (props) => {

  // Handle Modal
  const [modalArea, setModal] = useState();

  let navigate = useNavigate();

  const toProduct = () => {
    sessionStorage.setItem('productId', props.productId);
    navigate('/productpage');
  }

  const edit = () => {
    setModal(<EditProduct
      close={setModal}
      id={props.productId}
      name={props.name}
      stock={props.stock}
      price={props.price}
      desc={props.desc}
      varOne={props.varOne}
      varTwo={props.varTwo}
      varThree={props.varThree}
      editRender={props.editRender}
    />)
  }

  const deleteItem = () => {
    if (window.confirm("Are you sure you want to delete product: " + props.name)) {
      Axios.delete('http://localhost:5000/api/deleteproduct/' + props.productId)
        .then((res) => {
          if (res) {
            console.log("Delted:" + props.name);
            props.editRender(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }


  return (
    <Grid item xs={5} style={{marginRight: " 20px", marginBottom: "10px"}}>
      <Card sx={{ minWidth: 275 }} >
        <CardContent>
          <div className='remove'>
            <DeleteForeverIcon onClick={deleteItem} />
          </div>
          <br></br>
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
          <Button onClick={edit} variant="outlined" size="small">Edit Product</Button>
        </CardActions>
      </Card>
      {modalArea}
    </Grid>
    
  )
}

export default ProductCard
