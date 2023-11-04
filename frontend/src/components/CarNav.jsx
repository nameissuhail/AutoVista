import React from 'react'

const CarNav = () => {
  return (
    <div>
      <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Car Navigation Bar</title>
<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.navbar {
  overflow: hidden;
  background-color: #333;
  display: flex;
  justify-content: center; 
  align-items: center;
}

.navbar a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f2f2f2;
  padding: 10px;
  text-decoration: none;
  transition: 0.3s;
}

.navbar a img {
  width: 50px; 
  height: auto;
  margin-bottom: 5px;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}

.navbar a.active img {
  border: 2px solid #f2f2f2; 
}

@media screen and (max-width: 600px) {
  .navbar a {
    width: 100%;
  }
}
</style>
</head>
<body>

<div class="navbar">
  <a href="#cars" onclick="setActive(this)">
    <img src="cars.png" alt="Cars">
    <span>Cars</span>
  </a>
  <a href="#trucks" onclick="setActive(this)">
    <img src="truc.png" alt="Trucks">
    <span>Trucks</span>
  </a>
  <a href="#suvs" onclick="setActive(this)">
    <img src="suvs.png" alt="SUVs">
    <span>SUVs</span>
  </a>
  <a href="#sedans" onclick="setActive(this)">
    <img src="sed.png" alt="Sedans">
    <span>Sedans</span>
  </a>
  <a href="#hatchbacks" onclick="setActive(this)">
    <img src="hab.png" alt="Hatchbacks">
    <span>Hatchbacks</span>
  </a>
  <a href="#hatchbacks" onclick="setActive(this)">
    <img src="cybet.png" alt="Hatchbacks">
    <span>Electric Vehicles</span>
  </a>
</div>


<script>
function setActive(element) {
  
  var links = document.querySelectorAll('.navbar a');
  links.forEach(function(link) {
    link.classList.remove('active');
  });
  
 
  element.classList.add('active');
}
</script>

</body>
</html>
    </div>
  )
}

export default CarNav
