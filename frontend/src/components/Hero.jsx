import React from 'react'

const Hero = () => {
  return (
    <div> <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car Buying Hero Section</title>
    <style>
        .hero {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh; /* Adjust based on your requirement */
            background-image: url('bg4.png');
            background-size: cover;
            background-position: center;
            color: rgb(255, 255, 255);
        }

        h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .search-bar input {
            padding: 10px 20px;
            font-size: 1em;
            width: 80%;
            border: none;
            border-radius: 25px;
            margin-bottom: 30px;
        }

        .shop-buttons {
            display: flex;
            margin-bottom: 10px;
            gap: 30px;
        }

        .shop-buttons button {
            background-color: transparent;
            color: white;
            border: 2px solid white;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .shop-buttons button:hover {
            background-color: white;
            color: black;
        }
    </style>
</head>
<body>
    <section class="hero">
        <h1>Car buying shaped to your life</h1>
        <div class="search-bar">
            <input type="text" placeholder="Search make, model, or type">
        </div>
        <div class="shop-buttons">
            <button>Shop New</button>
            <button>Shop Used</button>
            <button>Shop Electric</button>
        </div>
    </section>
</body>
</html>
    </div>
  )
}

export default Hero
