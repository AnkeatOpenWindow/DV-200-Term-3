import * as mdb from 'mdb-react-ui-kit'; // lib
import { Input } from 'mdb-react-ui-kit'; // module
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

function Product() {
    return (
      <div className="App">
        <div style={{backgroundColor: "#F5F5F5"}}>
          <div class="row" style={{width: "60%", marginLeft: "auto", marginRight: "auto", paddingTop: "50px",  paddingBottom: "50px"}}>
          <div class="col-sm-4">
              <div class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src="https://thimg-afcc.kxcdn.com/@wth-img/225x225/products/2020/12/08/th00498291-1.jpg" class="img-fluid"/>
                  <a href="#!">
                    <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">R 129.99</h5>
                  <p class="card-text">View more...</p>
                  <a href="#!" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FHLQDQh5GUPK0XZA9lYoGjo8YUkjuq_iS-cbOkbvCtZdLi-KST7UjMUguh1Qa2IyjUs&usqp=CAU" class="img-fluid"/>
                  <a href="#!">
                    <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">R 250.00</h5>
                  <p class="card-text">View more...</p>
                  <a href="#!" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzmlIIPMxIaaXt0PCpfgzl1Dy81tfGckrK7ykm2Q2a3lJU0L_CcpidwbcifSToa3-rb8&usqp=CAU" class="img-fluid"/>
                  <a href="#!">
                    <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">R 189.99</h5>
                  <p class="card-text">View more...</p>
                  <a href="#!" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{backgroundColor: "#F5F5F5"}}>
          <div class="row" style={{width: "60%", marginLeft: "auto", marginRight: "auto", paddingTop: "50px",  paddingBottom: "50px"}}>
          <div class="col-sm-4">
              <div class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src="https://thimg-afcc.kxcdn.com/@wth-img/225x225/products/2020/12/08/th00498291-1.jpg" class="img-fluid"/>
                  <a href="#!">
                    <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">R 129.99</h5>
                  <p class="card-text">View more...</p>
                  <a href="#!" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FHLQDQh5GUPK0XZA9lYoGjo8YUkjuq_iS-cbOkbvCtZdLi-KST7UjMUguh1Qa2IyjUs&usqp=CAU" class="img-fluid"/>
                  <a href="#!">
                    <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">R 250.00</h5>
                  <p class="card-text">View more...</p>
                  <a href="#!" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzmlIIPMxIaaXt0PCpfgzl1Dy81tfGckrK7ykm2Q2a3lJU0L_CcpidwbcifSToa3-rb8&usqp=CAU" class="img-fluid"/>
                  <a href="#!">
                    <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">R 189.99</h5>
                  <p class="card-text">View more...</p>
                  <a href="#!" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{backgroundColor: "#F5F5F5"}}>
          <div class="row" style={{width: "60%", marginLeft: "auto", marginRight: "auto", paddingTop: "50px",  paddingBottom: "50px"}}>
          <div class="col-sm-4">
              <div class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src="https://thimg-afcc.kxcdn.com/@wth-img/225x225/products/2020/12/08/th00498291-1.jpg" class="img-fluid"/>
                  <a href="#!">
                    <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">R 129.99</h5>
                  <p class="card-text">View more...</p>
                  <a href="#!" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FHLQDQh5GUPK0XZA9lYoGjo8YUkjuq_iS-cbOkbvCtZdLi-KST7UjMUguh1Qa2IyjUs&usqp=CAU" class="img-fluid"/>
                  <a href="#!">
                    <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">R 250.00</h5>
                  <p class="card-text">View more...</p>
                  <a href="#!" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzmlIIPMxIaaXt0PCpfgzl1Dy81tfGckrK7ykm2Q2a3lJU0L_CcpidwbcifSToa3-rb8&usqp=CAU" class="img-fluid"/>
                  <a href="#!">
                    <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">R 189.99</h5>
                  <p class="card-text">View more...</p>
                  <a href="#!" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>






      </div>
      );
    }
    
    export default Product;
    