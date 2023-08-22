import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
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
  
            <div class="collapse navbar-collapse" id="navbarSupportedContent" Style={{ color: '#ffffff' }}>
              <a class="navbar-brand mx-5 mt-2 mt-lg-0" href="/">
                <img
                  src="https://demo.yolotheme.com/motor/wp-content/uploads/2016/01/logo2-e1467262875150.png"
                  height="50"
                  alt="MDB Logo"
                  loading="lazy"
                />
              </a>
              <ul class="navbar-nav mx-5 mb-2 mb-lg-0 " >
                <li style={{marginRight:'30px'}} class="nav-item" >
                  <a style={{color:'#ED9C14', fontWeight:'bold'}} class="nav-link" href="/">Home</a>
                </li>
                <li style={{marginRight:'30px'}} class="nav-item">
                  <a style={{color:'white', fontWeight:'bold'}} class="nav-link" href="/">Product</a>
                </li>
                <li style={{marginRight:'30px'}} class="nav-item">
                  <a style={{color:'white', fontWeight:'bold'}} class="nav-link" href="/admin">Admin</a>
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

  
