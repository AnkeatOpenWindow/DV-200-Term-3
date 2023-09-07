import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Userinfo() {
    const [readOrders, setReadOrders] = useState();
    const [renderOrders, setrenderOrders] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState();
    const [order, setOrder] = useState({})

    useEffect(() => {
        // Retrieve cart items from local storage
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);


    let navigate = useNavigate();

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

    useEffect(() => {
        // Retrieve cart items from local storage
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);

        // Calculate the total price
        const totalPrice = storedCartItems.reduce((acc, item) => acc + item.price, 0);
        setTotal(totalPrice);
    }, []);

    const backHome = () => {
        sessionStorage.clear();
        navigate("/productlist");
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location = "/";
    };

    const handlePlaceOrder = () => {
        const token = localStorage.getItem("token");

        if (token) {
            const ordernumber = Date.now() + token;
            const payload = {
                name: localStorage.getItem("username"),
                order: JSON.parse(localStorage.getItem("cartItems")),
                price: total,
                ordernumber: ordernumber
            };

            Axios.post('http://localhost:5000/api/newOrder', payload)
                .then((res) => {
                    if (res) {
                        console.log("Item Added");
                        localStorage.removeItem("cartItems");

                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            // Handle the case when there's no token
        }
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
                <h1 style={{ marginBottom: " 10px" }}>Cart</h1>
                <Col sm={12}>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <b>Product name</b>
                                </th>
                                <th scope="col">
                                    <b>Quantity</b>
                                </th>
                                <th scope="col">
                                    <b>Price</b>
                                </th>
                                <th scope="col"
                                ><b>Delete</b>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>1</td>
                                    <td>R {item.price}</td>
                                    <td><DeleteForeverIcon onClick={() => deleteItem(index)} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
                <Col sm={6}>

                </Col>
                <Col sm={6}>
                    <h1>Total: R {total}</h1>
                </Col>

            </Row>
            <Row>
                <Col sm={6}>
                </Col>
                <Col sm={6} style={{ marginBottom: " 10px" }}>
                    <Button onClick={backHome} variant="outlined" size="small" style={{ marginRight: " 5px" }} >Cancel</Button>
                    <Button onClick={handlePlaceOrder} variant="contained" size="small" >Place order</Button>
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