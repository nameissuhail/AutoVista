import React from 'react'
const Navbar = () => {
  return (
    <div>
        <!DOCTYPE html>
<html>
<head>
    <style>
        /* Add your CSS styling here to make the navigation bar look as desired. */
        /* For simplicity, I'm not providing full CSS styles here. */
        /* You can style it according to your website's design. */
        /* Example: background color, font size, padding, etc. */
    </style>
</head>
<body>
    <div class="navbar">
        <img src="your-logo-image.jpg" alt="Logo" class="logo">
        <ul class="nav-list">
            <li><a href="#">New</a>
                <ul class="dropdown">
                    <li><a href="#">New SUV</a></li>
                    <li><a href="#">New Mustangs</a></li>
                    
                </ul>
            </li>
            <li><a href="#">Used</a>
                <ul class="dropdown">
                    <li><a href="#">Used SUV</a></li>
                    <li><a href="#">Used Sedans</a></li>
                    
                </ul>
            </li>
            <li><a href="#">Electric</a>
                <ul class="dropdown">
                    <li><a href="#">Electric SUV</a></li>
                    <li><a href="#">Electric Sedans</a></li>
                   
                </ul>
            </li>
            <li><a href="#">Research</a></li>
            <li><a href="#">Sell Your Car</a></li>
        </ul>
        <div class="search-bar">
            <input type="text" placeholder="Search">
            <button type="submit">Search</button>
        </div>
        <a href="#" class="signup">Sign Up</a>
    </div>
</body>
</html>

    </div>
  )
}

export default Navbar
