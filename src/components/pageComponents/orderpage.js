import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ProductCardthree from '../uiComponents/productCardthree';
import Axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Userinfo() {
    const [readOrders, setReadOrders] = useState();
    const [renderOrders, setRenderOrders] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState();
    const [order, setOrder] = useState({})

    let navigate = useNavigate();

    useEffect(() => {
        Axios.get('http://localhost:5000/api/allorders')
            .then(res => {
                let data = res.data;
                const productItem = data.map((item) => <ProductCardthree key={item._id} productId={item._id} name={item.name} price={item.price} order={item.order} ordernumber={item.ordernumber} editRender={setRenderOrders} />);
                setReadOrders(productItem);
                setRenderOrders(false);
            });
    }, [renderOrders]);

    const deleteItem = (index) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            // Remove the item at the specified index from cartItems
            const updatedCartItems = [...cartItems];
            updatedCartItems.splice(index, 1);
            setCartItems(updatedCartItems);

            // Update local storage with the new cartItems array
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

            const newTotal = updatedCartItems.reduce((acc, item) => acc + item.price, 0);
            setTotal(newTotal);
        }
    }
    const backAdmin = () => {
        sessionStorage.clear();
        navigate("/admin");
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location = "/";
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
                                <a style={{ color: 'white', fontWeight: 'bold' }} class="nav-link" href="/Cart">Cart</a>
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


            <Row style={{ marginTop: "30px" }}>
                <Col sm={12}>
                    <h1 style={{ marginBottom: " 10px" }}>Orders</h1>
                    {readOrders}
                </Col>
                <Col sm={6}>

                </Col>
                <Col sm={6} style={{ marginBottom: " 10px" }}>
                    <Button onClick={backAdmin} variant="contained" size="small" style={{ marginLeft: " 400px" }} >Back to admin</Button>
                </Col>
            </Row>


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

export default Userinfo;