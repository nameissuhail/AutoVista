import React from 'react'

const Brands = () => {
  return (
    <div>
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale: 1.0">
    <title>Brand Selection</title>
    <style>
        .brand-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 50px 0;
        }

        .brand-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
        }

        .brand-header h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
        }

        .brand-header .brand-tabs {
            display: flex;
            gap: 10px;
            cursor: pointer;
        }

        .brand-header .brand-tabs button {
            background-color: transparent;
            border: none;
            padding: 5px 15px;
            font-size: 1em;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .brand-header .brand-tabs button.active {
            background-color: black;
            color: white; 
        }

        .brand-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }

        .brand-card {
            display: flex;
            align-items: center;
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 150px;
            justify-content: center;
            transition: box-shadow 0.3s;
        }
        

        .brand-card:hover {
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
        }

        .brand-card img {
            max-width: 50px;
            margin-right: 10px;
        }

        .see-more {
            margin-top: 20px;
            cursor: pointer;
            display: inline-block;
            padding: 10px 20px;
            border: 2px solid black;
            border-radius: 10px; 
        }

        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <div class="brand-section">
        <div class="brand-header">
            <h1>Shop your favorite brand</h1>
            <div class="brand-tabs">
                <button class="active" onclick="toggleBrandTab(this)">All Cars</button>
            </div>
        </div>
        <div class="brand-grid">
            <!-- Example brand cards -->
            <div class="brand-card">
                <img src="bentl.png" alt="">
                Bently
            </div>
            <div class="brand-card">
                <img src="ben1.png" alt="">
                Benz
            </div>
            <div class="brand-card">
                <img src="rr.png" alt="">
                Rolls Royce
            </div>
            <div class="brand-card">
                <img src="bmw.png" alt="">
                BMW
            </div>
            <div class="brand-card hidden" id="bugatti-card">
                <img src="bug.png" alt="">
                Bugatti
            </div>
            <div class="brand-card hidden" id="ferrari-card">
                <img src="fr.png" alt="">
                Ferrari
            </div>
            <div class="brand-card hidden" id="porsche-card">
                <img src="pors.png" alt="" >
                Porsche
            </div>
        </div>
        <div class="see-more" onclick="showMoreBrands()">
            See more <span>&#x25BC;</span>
        </div>
    </div>
    <script>
        function toggleBrandTab(button) {
            
            const brandTabs = document.querySelectorAll('.brand-tabs button');

            
            brandTabs.forEach(tab => tab.classList.remove('active'));

            button.classList.add('active');
        }

        function showMoreBrands() {
            const bugattiCard = document.getElementById('bugatti-card');
            const ferrariCard = document.getElementById('ferrari-card');
            const porscheCard = document.getElementById('porsche-card');

            if (bugattiCard && ferrariCard && porscheCard) {
                bugattiCard.classList.toggle('hidden');
                ferrariCard.classList.toggle('hidden');
                porscheCard.classList.toggle('hidden');
            }
        }
    </script>
</body>
</html>

    </div>
  )
}

export default Brands
