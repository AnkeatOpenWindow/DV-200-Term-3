import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Axios from 'axios';
import ProductCard from '../uiComponents/productCard';
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
        const productItem = data.map((item) => <ProductCard key={item._id} productId={item._id} name={item.name} price={item.price} desc={item.description} stock={item.stock} varOne={item.variations.black} varTwo={item.variations.red} varThree={item.variations.blue} editRender={setRenderProducts} />);
        setReadProducts(productItem);
        setRenderProducts(false);
      });
  }, [renderProducts]);


  let defaultFormVals = ["name", "price", "description", "varOne", "varTwo", "varThree"];

  const [formValues, setFormValues] = useState(defaultFormVals);
  const [imgName, setImgName] = useState("Name of file will appear here");

  const [productImage, setProductImage] = useState();
  const [previewImage, setPreviewImage] = useState();//Template image


  const getValues = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }


  const getImage = (e) => {
    // This is where Multer comes in
    let imagefile = e.target.files[0];
    setProductImage(imagefile);

    // Error is around here (does not want to show preview of image)
    let value = e.target.value;
    let imgNameTemp = value.substring(12);
    setImgName(imgNameTemp);

    let reader = new FileReader();
    reader.onload = () => {
      // let output = document.querySelector('.imgPrev img');
      // output.setAttribute('src', reader.result);
      setPreviewImage(reader.result);
      console.log(reader.result);
    };


    reader.readAsDataURL(e.target.files[0]);
  }




  const addProduct = (e) => {
    e.preventDefault();

    const payloadData = new FormData();

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

    payloadData.append("information", JSON.stringify(payload));
    payloadData.append("image", productImage);

    Axios.post('http://localhost:5000/api/newProduct', payloadData)
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

    <div className="App">
      <Row style={{ marginTop: "30px" }}>
        <Col sm={5} style={{ marginLeft: " 20px" }}>
          <h1 style={{ marginBottom: " 50px" }}>Add a product</h1>
          <Form onSubmit={addProduct}>
            {/* image here */}
            <Button style={{ marginRight: "430px", marginBottom: "10px" }} variant="contained" size="small" component="label">Upload file<input type="file" hidden onChange={getImage} /></Button>
            <div className='imgPrevCon'>
              <img className='imgPrev' src={previewImage}></img>
              </div>
            <p style={{ marginRight: " 400px" }}>{imgName}</p>

            <Form.Group className="mb-3" >
              <TextField required name="name" label="Product Name" fullWidth margin="dense" onChange={getValues} />
            </Form.Group>

            <Form.Group className="mb-3" >
              <TextField required name="price" label="Product Price" fullWidth margin="dense" onChange={getValues} />
            </Form.Group>

            <Form.Group className="mb-3" >
              <TextField required name="description" label="Product Description" multiline fullWidth rows={3} margin="dense" onChange={getValues} />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} >
                <TextField required name="varOne" label="In Stock: Black" margin="dense" onChange={getValues} />
              </Form.Group>

              <Form.Group as={Col} >
                <TextField required name="varTwo" label="In Stock: Red" margin="dense" onChange={getValues} />
              </Form.Group>

              <Form.Group as={Col} >
                <TextField required name="varThree" label="In Stock: Blue" margin="dense" onChange={getValues} />
              </Form.Group>
            </Row>

            <Row className="mb-1">
              <Form.Group as={Col} >
                <Button type="submit" fullWidth variant="contained">Add New Product</Button>
              </Form.Group>
            </Row>
          </Form>
        </Col>

        <Col sm={6} style={{ marginLeft: "50px" }}>
          <Row className="mb-2">
            <h1>The Motorbike wings: Products</h1>
            <Grid container spacing={1}>
              {readProducts}
            </Grid>
          </Row>
        </Col>
      </Row>



    </div>
  );
}

export default Admin;
