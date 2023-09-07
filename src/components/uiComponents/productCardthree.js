import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const ProductCardthree = (props) => {




  let navigate = useNavigate();

  return (
    <Grid item xs={5} style={{ marginRight: " 20px", marginBottom: "10px" }}>
      <table class="table table-bordered table-fixed " >
        <thead>
          <tr>
            <th scope="col">
              <b>Person that ordered:</b>
            </th>
            <th scope="col">
              <b>Total price</b>
            </th>
            <th scope="col">
              <b>Order Number</b>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{textAlign: " left " }}>
            <td>{props.name}</td>
            <td>R {props.price}</td>
            <td className="table-cell">{props.ordernumber}</td>
          </tr>
        </tbody>
      </table>
    </Grid>


  )
}

export default ProductCardthree
