import React from 'react'

const Info = () => {
  return (
    <div>
      <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TrueCar Section</title>
<style>
  .benefits-section {
    display: flex;
    justify-content: space-around;
    background-color: #575555;
    color: #fff;
    padding: 20px;
  }
  .benefit {
    text-align: center;
    width: 30%;
  }
  .benefit img {
    width: 100px;
    height: auto;
  }
  .benefit h3 {
    font-size: 1.5em;
  }
  .benefit p {
    font-size: 1em;
  }
  .sign-up-button {
    text-align: center;
    margin-top: 10px;
  }
  .sign-up-button a {
    display: inline-block;
    background-color: gold; 
    color: #575555; 
    padding: 10px 20px;
    text-decoration: none;
    border: 2px solid gold;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
  }
  .sign-up-button a:hover {
    background-color: #575555; 
    color: gold; 
  }
</style>
</head>
<body>

<div class="benefits-section">
  <div class="benefit">
    <img src="carct.png" alt="Transparent Pricing Icon">
    <h3>Transparent pricing</h3>
    <p>No surprises here. See how much you'll pay on cars you like.</p>
  </div>
  <div class="benefit">
    <img src="carcert.png" alt="Minutes Not Hours Icon">
    <h3>Minutes, not hours</h3>
    <p>Time saving tools to help you find the right car in a snap.</p>
    <div class="sign-up-button">
      <a href="#">Sign Up</a>
    </div>
  </div>
  <div class="benefit">
    <img src="carn.png" alt="Shop Your Way Icon">
    <h3>Shop your way</h3>
    <p>Your own pace, your own space. Shop online where and when it's convenient for you.</p>
  </div>
</div>

</body>
</html>

    </div>
  )
}

export default Info
