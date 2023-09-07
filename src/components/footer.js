import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Footer() {
  return (

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

  );
}

export default Footer


