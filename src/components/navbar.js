import * as mdb from 'mdb-react-ui-kit'; // lib
import { Input } from 'mdb-react-ui-kit'; // module
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg " style={{ backgroundColor: 'rgba(0, 0, 0, 0.80)', height:'100px' }}>
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
  
            <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" Style={{ color: '#ffffff' }}>
              <a class="navbar-brand mx-5 mt-2 mt-lg-0" href="#">
                <img
                  src="https://demo.yolotheme.com/motor/wp-content/uploads/2016/01/logo2-e1467262875150.png"
                  height="50"
                  alt="MDB Logo"
                  loading="lazy"
                />
              </a>
              <ul class="navbar-nav mx-5 mb-2 mb-lg-0 " >
                <li style={{marginRight:'30px'}} class="nav-item" >
                  <a style={{color:'#ED9C14', fontWeight:'bold'}} class="nav-link" href="/">HOME</a>
                </li>
                <li style={{marginRight:'30px'}} class="nav-item">
                  <a style={{color:'white', fontWeight:'bold'}} class="nav-link" href="/product">PRODUCT</a>
                </li>
                <li style={{marginRight:'30px'}} class="nav-item">
                  <a style={{color:'white', fontWeight:'bold'}} class="nav-link" href="#">SHOP</a>
                </li>
                <li style={{marginRight:'30px'}} class="nav-item">
                  <a style={{color:'white', fontWeight:'bold'}} class="nav-link" href="#">BLOG</a>
                </li>
                <li style={{marginRight:'30px'}} class="nav-item">
                  <a style={{color:'white', fontWeight:'bold'}} class="nav-link" href="#">ABOUT US</a>
                </li>
                <li style={{marginRight:'30px'}} class="nav-item">
                  <a style={{color:'white', fontWeight:'bold'}} class="nav-link" href="#">CONTACT</a>
                </li>
                <li style={{marginRight:'30px'}} class="nav-item">
                  <a style={{color:'white', fontWeight:'bold'}} class="nav-link" href="#">PAGES</a>
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
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
            </form>
  
            <div class="d-flex align-items-center">
              <a class="text-reset me-3" href="#">
                <i class="fas fa-shopping-cart"></i>
              </a>
  
              <div class="dropdown">
                <a
                  class="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fas fa-bell"></i>
                  <span class="badge rounded-pill badge-notification bg-danger"></span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">Some news</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Another news</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>
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
                    <a class="dropdown-item" href="#">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      );
}

export default Navbar

  
