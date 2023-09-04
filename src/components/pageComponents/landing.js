import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';




function Landing() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg " style={{ backgroundColor: 'rgba(0, 0, 0, 0.80)', height: '100px' }}>
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent" Style={{ color: '#ffffff' }}>
            <a class="navbar-brand mx-5 mt-2 mt-lg-0" href="/landing">
              <img
                src="https://demo.yolotheme.com/motor/wp-content/uploads/2016/01/logo2-e1467262875150.png"
                height="50"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            <ul class="navbar-nav mx-5 mb-2 mb-lg-0 " >
              <li style={{ marginRight: '30px' }} class="nav-item" >
                <a style={{ color: '#ED9C14', fontWeight: 'bold' }} class="nav-link" href="/landing">Home</a>
              </li>
              <li style={{ marginRight: '30px' }} class="nav-item">
                <a style={{ color: 'white', fontWeight: 'bold' }} class="nav-link" href="/productlist">Products</a>
              </li>
              <li style={{ marginRight: '30px' }} class="nav-item">
                <a style={{ color: 'white', fontWeight: 'bold' }} class="nav-link" href="/admin">Admin</a>
              </li>

            </ul>
          </div>

          <form class="d-flex input-group w-auto">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          </form>

          <div class="d-flex align-items-center">
            <a class="text-reset me-3" href="#">
              <i class="fas fa-shopping-cart"></i>
            </a>
            <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a class="dropdown-item" href="#">My profile</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Settings</a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
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
              <h3 style={{ marginBottom: '100px', fontSize: '100px' }}>BEST SALE</h3>
              <p>HONDA</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://www.polaris-stormtec.com/fileadmin/templates/model21/features/atv/scr-xp-1000/f0-lg.jpg" class="d-block w-100" alt="Camera" />
            <div class="carousel-caption d-none d-md-block">
              <h3 style={{ marginBottom: '100px', fontSize: '100px' }}>DUSTERS</h3>
              <p>THE LEGENDS DRIVE</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://cdn1.polaris.com/globalassets/orv/root/articles/22-what-to-wear/hero-lg.jpg?v=99ac948c&format=webp" class="d-block w-100" alt="Exotic Fruits" />
            <div class="carousel-caption d-none d-md-block">
              <h3 style={{ marginBottom: '100px', fontSize: '100px' }}>RACERS</h3>
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

      <div style={{ backgroundColor: "#F5F5F5" }}>
        <div class="row" style={{ width: "60%", marginLeft: "auto", marginRight: "auto", paddingTop: "50px", paddingBottom: "50px" }}>
          <div class="col-sm-4">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://thimg-afcc.kxcdn.com/@wth-img/225x225/products/2020/12/08/th00498291-1.jpg" class="img-fluid" />
                <a href="#!">
                  <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FHLQDQh5GUPK0XZA9lYoGjo8YUkjuq_iS-cbOkbvCtZdLi-KST7UjMUguh1Qa2IyjUs&usqp=CAU" class="img-fluid" />
                <a href="#!">
                  <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzmlIIPMxIaaXt0PCpfgzl1Dy81tfGckrK7ykm2Q2a3lJU0L_CcpidwbcifSToa3-rb8&usqp=CAU" class="img-fluid" />
                <a href="#!">
                  <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
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

      <div style={{ margin: "50px" }}>
        <img src="https://demo.yolotheme.com/motor/wp-content/uploads/2016/01/logo_title3.png" height="50" alt="MDB Logo" loading="lazy" />
      </div>

      <div style={{ width: '100%', marginTop: '3%', marginBottom: '5%', marginleftt: '3' }}>
        <h1>Featured Products</h1>
        <p>Down below is just a few of the products that were sell.
          <br></br>
          More products can me found on our product page.Head on over and take look.</p>
      </div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ marginLeft: "auto", marginRight: "auto", width: "50%", marginBottom: "5%" }}>
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav" style={{ width: "100%" }}>
              <a class="nav-link active" aria-current="page" href="/productlist" style={{ marginRight: 'auto', marginLeft: 'auto' }}>Clothing</a>
              <a class="nav-link" href="/productlist" style={{ marginRight: 'auto' }}>Gloves</a>
              <a class="nav-link" href="/productlist" style={{ marginRight: 'auto' }}>Helmets</a>
              <a class="nav-link" href="/productlist" style={{ marginRight: 'auto' }}>Gear</a>
            </div>
          </div>
        </div>
      </nav>

      <div class="row" style={{ width: "60%", marginLeft: "auto", marginRight: "auto", paddingTop: "50px", paddingBottom: "50px" }}>
        <div class="col-sm-3">
          <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://i.pinimg.com/736x/9f/31/38/9f31380d0b1f3a991b3cfc5cbe296b40--moto-boots-motocross-gear.jpg" class="img-fluid" />
              <a href="#!">
                <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">R 129.99</h5>
              <p class="card-text">View more...</p>
              <a href="#!" class="btn btn-primary">Buy Now</a>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FHLQDQh5GUPK0XZA9lYoGjo8YUkjuq_iS-cbOkbvCtZdLi-KST7UjMUguh1Qa2IyjUs&usqp=CAU" class="img-fluid" />
              <a href="#!">
                <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">R 250.00</h5>
              <p class="card-text">View more...</p>
              <a href="#!" class="btn btn-primary">Buy Now</a>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUr43NCagXfJSYk-zu58aTGYz7yQJS5NyvGw&usqp=CAU" class="img-fluid" />
              <a href="#!">
                <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">R 189.99</h5>
              <p class="card-text">View more...</p>
              <a href="#!" class="btn btn-primary">Buy Now</a>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://i.ebayimg.com/thumbs/images/g/mtUAAOSweclhgyZs/s-l225.jpg" class="img-fluid" />
              <a href="#!">
                <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
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

      <div class="row" style={{ textAlign: "left", marginTop: "10%", marginLeft: "auto", marginRight: "auto", width: "75%" }}>
        <div class="col-sm-6">
          <h3>ALPINESTARS BIONIC PLUS</h3>
          <p>
            Ultra lightweight and highly ventilated, the Bionic Plus Jacket features an advanced stretch mesh construction for a secure, comfortable fit. Tested by multiple Dakar winner Marc Coma, this jacket features CE certified protectors for excellent resistance to impact and shock abrasion and is fully compatible with Alpinestars Bionic Neck Support.
            <br></br>
            • Removable upper chest and back padded panels accommodate Alpinestars BNS.
            <br></br>
            • Premium, auto-locking YKK zips for main frontal closure and on detachable sleeves to ensure secure fitting.
            <br></br>
            • Convenient, soft touch silicon pull tabs on shoulders for secure fitment of Alpinestars BNS.
            <br></br>
            • Thermoformed kidney protector padding.
            <br></br>
            • Silicone printed logos throughout to help keep jersey in place.
          </p>
        </div>
        <div class="col-sm-6">
          <img src="https://m.media-amazon.com/images/I/511inaOAFIL._SL500_.jpg" width="100%" />
        </div>
      </div>
      <footer class="text-center text-lg-start bg-light text-muted">

        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">




        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">

            <div class="row mt-3">

              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Motorbike wings
                </h6>
                <p>
                  Motorbike wings offer a laugh ranger of motorbike gears.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" class="text-reset">Helmets</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Jackets</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Gloves</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Boots</a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" class="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Help</a>
                </p>
              </div>



              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
              </div>

            </div>

          </div>
        </section>

        <div class="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2021 Copyright:
          <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>

      </footer>
    </div>

  );
}

export default Landing;
