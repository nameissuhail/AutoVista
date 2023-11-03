import React from 'react'
const Navbar = () => {
  return (
   <div>
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar Example</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"> <!-- Include Font Awesome library -->
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 30px;
            background-color: black;
        }

        .navbar-logo img {
            height: 60px;
        }

        .navbar-links a,
        .navbar-link-dropdown a {
            margin: 0 15px;
            color: white;
            text-decoration: none;
        }

        .navbar-search input {
            padding: 5px 10px;
        }

        .navbar-signup a {
            color: white;
            background-color: #e74c3c; 
            padding: 5px 15px;
            text-decoration: none;
            border-radius: 5px;
        }

        .navbar-signup a:hover {
            background-color: #d43c2c; 
        }

        /* Dropdown CSS */
        .navbar-link-dropdown {
            position: relative;
            display: inline-block;
        }

        .navbar-link-dropdown .dropbtn {
            display: inline-block;
            cursor: pointer;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }

        .dropdown-content a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        }

        .navbar-link-dropdown:hover .dropdown-content {
            display: block;
        }

        .dropdown-content a:hover {
            background-color: #f1f1f1;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="navbar-logo">
            <img src="logo2.png" alt="TrueCar Logo">
        </div>
        <div class="navbar-links">
            <div class="navbar-link-dropdown">
                <a class="dropbtn">New <i class="fas fa-caret-down"></i></a>
                <div class="dropdown-content">
                    <a href="#">Sedans</a>
                    <a href="#">SUVs</a>
                    <a href="#">Trucks</a>
                    <a href="#">Convertibles</a>
                    <a href="#">Mustangs</a>
                </div>
            </div>
            <div class="navbar-link-dropdown">
                <a class="dropbtn">Used <i class="fas fa-caret-down"></i></a>
                <div class="dropdown-content">
                    <a href="#">Used Nanos</a>
                    <a href="#">Used Mustangs</a>
                    <a href="#">Used Trucks</a>
                    <a href="#">Used Sedans</a>
                </div>
            </div>
            <div class="navbar-link-dropdown">
                <a class="dropbtn">Electric <i class="fas fa-caret-down"></i></a>
                <div class="dropdown-content">
                    <a href="#">Electric SUVs</a>
                    <a href="#">Electric Sedans</a>
                    <a href="#">Electric Mustangs</a>
                    <a href="#">Electric Trucks</a>
                </div>
            </div>
            <div class="navbar-link-dropdown">
                <a class="dropbtn">Research <i class="fas fa-caret-down"></i></a>
                <div class="dropdown-content">
                    <a href="#">Car Reviews</a>
                    <a href="#">Pricing & Deals</a>
                    <a href="#">Car Leans</a>
                    <a href="#">Car Comparisons</a>
                    <a href="#">Quiz Play</a>
                </div>
            </div>
            <a href="#">Sell Your Car</a>
        </div>
        <div class="navbar-search">
            <input type="text" placeholder="Search">
            <i class="fas fa-search"></i>
        </div>
        <div class="navbar-signup">
            <a href="#"><i class="fas fa-user"></i> Sign up</a>
        </div>
    </nav>
</body>
</html>

    </div>
  )
}

export default Navbar
