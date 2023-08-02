import * as mdb from 'mdb-react-ui-kit'; // lib
import { Input } from 'mdb-react-ui-kit'; // module
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';



function Landing() {
    return (
      <div className="App">
        <div id="carouselExampleCrossfade" class="carousel slide carousel-fade" data-mdb-ride="carousel">
          <div class="carousel-indicators">
            <button
              type="button"
              data-mdb-target="#carouselExampleCrossfade"
              data-mdb-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselExampleCrossfade"
              data-mdb-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselExampleCrossfade"
              data-mdb-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="https://proadhesive.com/wp-content/themes/storefront-child/images/blog/single/como_poner_vinilo_para_moto-1920.jpg" class="d-block w-100" alt="Wild Landscape" />
              <div class="carousel-caption d-none d-md-block">
                <h3 style={{marginBottom:'100px', fontSize:'100px'}}>BEST SALE</h3>
                <p>THE BLACK PHANTOM</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://www.polaris-stormtec.com/fileadmin/templates/model21/features/atv/scr-xp-1000/f0-lg.jpg" class="d-block w-100" alt="Camera" />
              <div class="carousel-caption d-none d-md-block">
                <h3 style={{marginBottom:'100px', fontSize:'100px'}}>DUSTERS</h3>
                <p>THE LEGENDS DRIVE</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://cdn1.polaris.com/globalassets/orv/root/articles/22-what-to-wear/hero-lg.jpg?v=99ac948c&format=webp" class="d-block w-100" alt="Exotic Fruits" />
              <div class="carousel-caption d-none d-md-block">
                <h3 style={{marginBottom:'100px', fontSize:'100px'}}>RACERS</h3>
                <p>THE ULTIMATE MACHINES</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
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
                  <h5 class="card-title">$ 129.99</h5>
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
                  <h5 class="card-title">$ 250.00</h5>
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
                  <h5 class="card-title">$ 189.99</h5>
                  <p class="card-text">View more...</p>
                  <a href="#!" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
          
        <div style={{margin: "50px"}}>
          <img src="https://demo.yolotheme.com/motor/wp-content/uploads/2016/01/logo_title3.png" height="50" alt="MDB Logo" loading="lazy"/>
        </div>
        
       <div style={{width:'100%', marginTop:'3%', marginBottom:'5%', marginleftt:'3'}}>
       <h1>Featured Products</h1>
       <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
        <br></br>
             tincidunt ut laoreet dolore magna aliquam erat volutpa</p>
       </div>
  
       <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ marginLeft: "auto", marginRight: "auto", width: "50%", marginBottom: "5%" }}>
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav" style={{width:"100%"}}>
                <a class="nav-link active" aria-current="page" href="#" style={{marginRight:'auto', marginLeft:'auto'}}>Clothing</a>
                <a class="nav-link" href="#" style={{marginRight:'auto'}}>Exhausts</a>
                <a class="nav-link" href="#" style={{marginRight:'auto'}}>Gloves</a>
                <a class="nav-link" href="#" style={{marginRight:'auto'}}>Helmets</a>
                <a class="nav-link" href="#" style={{marginRight:'auto'}}>Gear</a>
                <a class="nav-link" href="#" style={{marginRight:'auto'}}>Tires</a>
              </div>
            </div>
          </div>
        </nav>
      
       <div class="row" style={{width: "60%", marginLeft: "auto", marginRight: "auto", paddingTop: "50px",  paddingBottom: "50px"}}>
          <div class="col-sm-3">
              <div class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src="https://i.pinimg.com/736x/9f/31/38/9f31380d0b1f3a991b3cfc5cbe296b40--moto-boots-motocross-gear.jpg" class="img-fluid"/>
                  <a href="#!">
                    <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">$ 129.99</h5>
                  <p class="card-text">View more...</p>
                  <a href="#!" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FHLQDQh5GUPK0XZA9lYoGjo8YUkjuq_iS-cbOkbvCtZdLi-KST7UjMUguh1Qa2IyjUs&usqp=CAU" class="img-fluid"/>
                  <a href="#!">
                    <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">$ 250.00</h5>
                  <p class="card-text">View more...</p>
                  <a href="#!" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUr43NCagXfJSYk-zu58aTGYz7yQJS5NyvGw&usqp=CAU" class="img-fluid"/>
                  <a href="#!">
                    <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">$ 189.99</h5>
                  <p class="card-text">View more...</p>
                  <a href="#!" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src="https://i.ebayimg.com/thumbs/images/g/mtUAAOSweclhgyZs/s-l225.jpg" class="img-fluid"/>
                  <a href="#!">
                    <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">$ 189.99</h5>
                  <p class="card-text">View more...</p>
                  <a href="#!" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
  
          <div class="row" style={{textAlign: "left", marginTop: "10%", marginLeft: "auto", marginRight: "auto", width:"75%"}}>
            <div class="col-sm-6">
              <h3>ALPINESTARS BIONIC PLUS</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <div class="col-sm-6">
              <img src="https://m.media-amazon.com/images/I/511inaOAFIL._SL500_.jpg" width="100%"/>
            </div>
          </div>
  
        </div>
        
    );
  }
  
  export default Landing;
  