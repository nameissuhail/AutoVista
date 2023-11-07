import React from 'react'

const Footer = () => {
  return (
    <div>
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Footer Example</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f4f4; /* Light grey background */
    }
    footer {
      background: linear-gradient(135deg, #1d1d1d, #424242); /* Gradient background */
      color: #f1f1f1;
      padding: 40px 20px;
      text-align: center;
      box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3); /* subtle shadow to lift footer off the page */
      position: relative;
      z-index: 2;
    }
    .footer-content {
      max-width: 1200px;
      margin: auto;
    }
    .footer-content p {
      margin: 10px 0;
      line-height: 1.5;
      font-size: 0.9em;
      opacity: 0.9;
    }
    .social-media {
      margin: 20px 0;
    }
    .social-media a {
      color: #f1f1f1;
      margin: 0 15px;
      font-size: 1.8em;
      transition: color 0.3s;
    }
    .social-media a:hover {
      color: #e50914; /* Highlight color for icons on hover */
    }
    .back-to-top {
      display: inline-block;
      margin-top: 20px;
      color: #f1f1f1;
      text-decoration: none;
      font-weight: bold;
      background-color: #e50914; /* Bright color for the button */
      padding: 10px 15px;
      border-radius: 20px; /* Rounded corners */
      transition: background-color 0.3s, transform 0.3s;
    }
    .back-to-top:hover {
      background-color: #f62234; /* Darker shade on hover */
      text-decoration: none; /* No underline on hover */
      transform: translateY(-3px); /* Lift effect on hover */
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Shadow effect on hover */
    }
    /* Custom font size and padding for icons */
    .fa {
      margin-right: 8px;
    }
    @media (max-width: 768px) {
      .footer-content {
        padding: 20px;
      }
      .social-media {
        display: block;
        margin-bottom: 20px;
      }
      .social-media a {
        display: inline-block;
        margin: 5px;
      }
      .back-to-top {
        display: block;
        margin: 20px auto;
      }
    }
  </style>
</head>
<body>

  <footer>
    <div class="footer-content">
      <p>All vehicle images ©️ EvoxlImages.com | Certain automotive content displayed within this website, Copyright DataOne Software and is protected under United States and international copyright law. Any unauthorized use, reproduction, distribution, recording or modification of this content is strictly prohibited.</p>
      <p>©️ 2023 RelayCars®️ | <a href="#" style="color: #e50914; text-decoration: none;">Terms & Conditions</a> | <a href="#" style="color: #e50914; text-decoration: none;">Privacy Policy</a> | <a href="#" style="color: #e50914; text-decoration: none;">EULA</a></p>
      <div class="social-media">
        <!-- Replace with actual links and icon classes -->
        <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
      </div>
    </div>
  )
}

export default Footer
