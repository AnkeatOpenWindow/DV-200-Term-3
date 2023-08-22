import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Axios from 'axios';
import ProductCard from '../uiComponents/productCard';


function Admin() {

  // Read all the DB Items 

  const [readProducts, setReadProducts] = useState();
  const [renderProducts, setRenderProducts] = useState(false);

  useEffect(()=>{
    Axios.get('http://localhost:5000/api/allproducts')
    .then(res =>{
      let data = res.data;
      const productItem = data.map((item)=> <ProductCard key={item._id} productId={item._id} name={item.name} price={item.price} desc={item.description} stock={item.stock} varOne={item.variations.green} varTwo={item.variations.red} varThree={item.variations.blue} editRender={setRenderProducts}/>);
      setReadProducts(productItem);
      setRenderProducts(false);
    });
  }, [renderProducts]);


let defaultFormVals = ["name", "price", "description", "varOne", "varTwo", "varThree"];

const [formValues, setFormValues] = useState(defaultFormVals);

const getValues = (e) =>{
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
        description: formValues['description'] ,
        variations: { 
            green: +formValues['varOne'],
            red:  +formValues['varTwo'],
            blue: +formValues['varThree'],
        }
  }

  Axios.post('http://localhost:5000/api/newProduct', payload)
  .then((res)=> {
    if(res){
      console.log("Item Added"); 
      setRenderProducts(true);
    }
  })
  .catch(function (error) {
    console.log(error);
  });

 }

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1>The Motorbike Shop: Products</h1>
          <Grid container spacing={2}>
              {readProducts}
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <h1>Add A Product</h1>
          <form onSubmit={addProduct}>
              <TextField required name="name" label="Product Name" fullWidth margin="dense" onChange={getValues} />
              <TextField required name="price" label="Product Price" fullWidth margin="dense" onChange={getValues}/>
              <TextField required name="description" label="Product Description" multiline fullWidth rows={3} margin="dense" onChange={getValues}/>
              <TextField required name="varOne" label="In Stock: Green" margin="dense" onChange={getValues} />
              <TextField required name="varTwo" label="In Stock: Red" margin="dense" style={{width: "52.4%", marginTop: "8px", height: "55px"}} onChange={getValues}/>
              <TextField required name="varThree" label="In Stock: Blue" margin="dense" onChange={getValues}  />
              <Button type="submit" style={{width: "52.4%", marginTop: "8px", height: "55px"}} variant="contained">Add New Product</Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default Admin;
