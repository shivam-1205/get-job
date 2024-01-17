const News = `<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>news</title>
</head>
<body>

            <div class="links">
                
                    <li class="hover-link nav-item" id="ipl" onclick="onNavItemClick('ipl')">Sport</li>
                    <li class="hover-link nav-item" id="finance" onclick="onNavItemClick('finance')">Finance</li>
                    <li class="hover-link nav-item" id="politics" onclick="onNavItemClick('politics')">Politics</li>
                    
            </div>
            <div class="search-bar flex">
            <input id="search-text" type="text" class="news-input" placeholder="e.g. Science">
            <button id="search-button" class="search-buttons">Search</button>
        </div>
    </div>
    <main>
    <div class="cards-container container flex" id="cards-container">
        
    </div>
</main>

<template id="template-news-card">
    <div class="card">
        <div class="card-header">
            <img src="https://via.placeholder.com/400x200" alt="news-image" id="news-img">
        </div>
        <div class="card-content">
            <h3 id="news-title">This is the Title</h3>
            <h6 class="news-source" id="news-source">End Gadget 26/08/2023</h6>
            <p class="news-desc" id="news-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe quis voluptatum quisquam vitae doloremque facilis molestias quae ratione cumque!</p>
        </div>
    </div>
</template>
           
    

   
</body>
</html>`
