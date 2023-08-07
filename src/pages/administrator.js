import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

function Administrator() {
    return (
      <div className="App">
        <div class="container" style={{ marginBottom: '20px', marginTop: '10px'}}>
          <h1>Invetory form</h1>
            <table class="table align-middle mb-0 bg-white table table-bordered" > 
              <thead class="bg-light">
                <tr>
                  <th>Name</th>
                  <th>Manifacture or Brand</th>
                  <th>Stock Quantity</th>
                  <th>Item Discontinued?</th>
                  <th>Cost per item</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="ms-3">
                        
                        <p class="text-muted mb-0">Helmet</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Shark</p>                
                  </td>
                  <td>
                    <p class="fw-normal mb-1">0</p>
                  </td>
                  <td>
                    <span class="badge badge-success rounded-pill d-inline">Still in production</span>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>
                  </td>
                </tr>


                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="ms-3">
                        
                        <p class="text-muted mb-0">Helmet</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Shark</p>                
                  </td>
                  <td>
                    <p class="fw-normal mb-1">0</p>
                  </td>
                  <td>
                    <span class="badge badge-success rounded-pill d-inline">Still in production</span>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>
                  </td>
                </tr>


                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="ms-3">
                        
                        <p class="text-muted mb-0">Helmet</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Shark</p>                
                  </td>
                  <td>
                    <p class="fw-normal mb-1">0</p>
                  </td>
                  <td>
                    <span class="badge badge-success rounded-pill d-inline">Still in production</span>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>
                  </td>
                </tr>


                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="ms-3">
                        
                        <p class="text-muted mb-0">Helmet</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Shark</p>                
                  </td>
                  <td>
                    <p class="fw-normal mb-1">0</p>
                  </td>
                  <td>
                    <span class="badge badge-success rounded-pill d-inline">Still in production</span>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>
                  </td>
                </tr>


                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="ms-3">
                        
                        <p class="text-muted mb-0">Helmet</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Shark</p>                
                  </td>
                  <td>
                    <p class="fw-normal mb-1">0</p>
                  </td>
                  <td>
                    <span class="badge badge-success rounded-pill d-inline">Still in production</span>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>
                  </td>
                </tr>


                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="ms-3">
                        
                        <p class="text-muted mb-0">Helmet</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Shark</p>                
                  </td>
                  <td>
                    <p class="fw-normal mb-1">0</p>
                  </td>
                  <td>
                    <span class="badge badge-success rounded-pill d-inline">Still in production</span>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>
                  </td>
                </tr>


                <tr>
                  <td>
                    <div class="d-flex align-items-center" >
                      <div class="ms-3">
                        
                        <p class="text-muted mb-0">Helmet</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Shark</p>                
                  </td>
                  <td>
                    <p class="fw-normal mb-1">0</p>
                  </td>
                  <td>
                    <span class="badge badge-success rounded-pill d-inline">Still in production</span>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>
                  </td>
                </tr>


                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="ms-3">
                        
                        <p class="text-muted mb-0">Helmet</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Shark</p>                
                  </td>
                  <td>
                    <p class="fw-normal mb-1">0</p>
                  </td>
                  <td>
                    <span class="badge badge-danger rounded-pill d-inline">Discontinued</span>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>
                  </td>
                </tr>
                <tr>
                  <td colspan="4" style={{ textAlign: "right"}}>Subtotal</td>
                  <td>R 000.00</td>
                </tr>
              </tbody>
            </table>
        </div>
        
        <div class="container" style={{ marginBottom: '20px'}}>
          <h1>Order from</h1>
            <table class="table align-middle mb-0 bg-white table table-bordered" > 
              <thead class="bg-light">
                <tr>
                  <th>Product</th>
                  <th>Prize</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="ms-3">
                        <p class="text-muted mb-0">Helmet</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>               
                  </td>
                  <td>
                    <p class="fw-normal mb-1">0</p>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>
                  </td>
                </tr>


                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                    <div class="ms-3">
                        <p class="text-muted mb-0">Helmet</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>                
                  </td>
                  <td>
                    <p class="fw-normal mb-1">0</p>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>
                  </td>
                </tr>


                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                    <div class="ms-3">
                        <p class="text-muted mb-0">Helmet</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>              
                  </td>
                  <td>
                    <p class="fw-normal mb-1">0</p>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>
                  </td>
                </tr>


                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                    <div class="ms-3">
                        <p class="text-muted mb-0">Helmet</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>               
                  </td>
                  <td>
                    <p class="fw-normal mb-1">0</p>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>
                  </td>
                </tr>


                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                    <div class="ms-3">
                        <p class="text-muted mb-0">Helmet</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>               
                  </td>
                  <td>
                    <p class="fw-normal mb-1">0</p>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>
                  </td>
                </tr>


                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="ms-3">
                        <p class="text-muted mb-0">Helmet</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>               
                  </td>
                  <td>
                    <p class="fw-normal mb-1">0</p>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>
                  </td>
                </tr>


                <tr>
                  <td>
                    <div class="d-flex align-items-center" >
                    <div class="ms-3">
                        <p class="text-muted mb-0">Helmet</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>               
                  </td>
                  <td>
                    <p class="fw-normal mb-1">0</p>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>
                  </td>
                </tr>


                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                    <div class="ms-3">
                        <p class="text-muted mb-0">Helmet</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>               
                  </td>
                  <td>
                    <p class="fw-normal mb-1">0</p>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">R 000.00</p>
                  </td>
                </tr>
                <tr>
                  <td colspan="3" style={{ textAlign: "right"}}>Subtotal</td>
                  <td>R 000.00</td>
                </tr>
              </tbody>
            </table>


            
        </div>
      </div>
      );
    }
    
    export default Administrator;
    