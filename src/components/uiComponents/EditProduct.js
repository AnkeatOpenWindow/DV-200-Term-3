import React from 'react'
import {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Axios from 'axios';

const EditProduct = (props) => {

//console.log(props)

let editFormValues = {name: props.name, price: props.price, description: props.desc, varOne: props.varOne, varTwo: props.varTwo, varThree: props.varThree};

const[editValues, setEditValues] = useState (editFormValues);

const updateValues = (e) =>{
  const { name, value } = e.target;
  setEditValues({...editValues, [name]: value});
}

//need to check, does not want to update.
const updateProd = (e) => {
  e.preventDefault(); 
  let productId = props.id;
  let payloads = editValues;

  Axios.patch('http://localhost:5000/api/updateproduct/' + productId, payloads)
    .then((res) => {
      if (res) {
        console.log('Item updated');
        props.close();
        props.editRender(true);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}



const closeModal = () =>{
  props.close();
}

  return (
    <div className='popUpModal'>
      <Grid container spacing={5}>
        <Grid item xs={4}>
        </Grid>
        <Grid item className='innerModal' xs={4}>
            <h1>Update This Product</h1>
            <form onSubmit={updateProd}>
                <TextField required name="name" defaultValue={props.name} label="Product Name" fullWidth margin="dense" onChange={updateValues}/>
                <TextField required name="price" defaultValue={props.price} label="Product Price" fullWidth margin="dense" onChange={updateValues}/>
                <TextField required name="description" defaultValue={props.desc} label="Product Description" multiline fullWidth rows={3} margin="dense" onChange={updateValues}/>
                <TextField required name="varOne" defaultValue={props.varOne} label="In Stock: Green" margin="dense" onChange={updateValues}/>
                <TextField required name="varTwo" defaultValue={props.varTwo} label="In Stock: Red" margin="dense"  style={{marginLeft: "2.5%", marginTop: "8px", height: "55px"}} onChange={updateValues}/>
                <TextField required name="varThree" defaultValue={props.varThree} label="In Stock: Blue" margin="dense" onChange={updateValues}/>
                <Button type="submit" style={{marginLeft: "2.5%", width: "49%", marginTop: "8px", height: "55px"}} variant="contained">Update Product</Button>
            </form>
            <Button onClick={closeModal} fullWidth style={{marginTop:"30px"}} variant="outlined">Close Modal</Button>

        </Grid>
        <Grid item xs={4}>
        </Grid>
    </Grid>
    </div>
  )
}

export default EditProduct
