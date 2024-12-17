const videos = [
    { title: "Taarak Mehta Ka Ooltah Chashmah - Full Episode 610 - 23rd March, 2020" , thumbnail: "https://www.youtube.com/watch?v=44nn4MwJ6h0", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZS6b4iZLEgEWpthRWAfsEFux7hgO6ZwLHKw&s", id: 1},
    { title: "INDIA'S GOT LATENT | EP 09 ft.@DeepakKalal @MananDesai @stanboss1" , thumbnail: "https://www.youtube.com/watch?v=ILu4LcipWI0", image:"https://i.ytimg.com/vi/ILu4LcipWI0/maxresdefault.jpg", id:2},
    { title: "The Day Lionel Messi Singlehandedly Destroyed Petr Cech and Arsenal" ,thumbnail: "https://www.youtube.com/watch?v=UM8OELXovAM",image:"https://i.dailymail.co.uk/i/pix/2014/10/16/1413469029189_wps_15_Barcelona_V_Arsenal_The_C.jpg", id: 3},
    { title: "Race Highlights | 2024 Abu Dhabi Grand Prix" , thumbnail: "https://www.youtube.com/watch?v=Qa0nj2CcaSM", image:"https://motorsportswire.usatoday.com/wp-content/uploads/sites/119/2024/12/2188108477.jpg?w=1000&h=600&crop=1", id: 4},
    { title: "ASMR MUKBANG | Triple Cheeseburger, Spicy Noodles, Spam, Cheese Stick, Fried Chicken" , thumbnail: "https://www.youtube.com/watch?v=QhVaR5IVxmA", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxJpUay-XyCP-ZA1ayLeXEeG2czj3KBFDtQ&s",id: 5},
    { title: "Cristiano Ronaldo 100 Legendary Goals Impossible To Forget" , thumbnail: "https://www.youtube.com/watch?v=mmeLCAP74KA", image:"https://media.newyorker.com/photos/61e87281b67066a13fd20ea8/master/pass/Caesar-Ronaldo.jpg", id: 6},
    { title: "Exam ke Mausam | Ashish Chanchani" , thumbnail: "hhttps://www.youtube.com/watch?v=Wje3zkc7syE",image:"https://i.ytimg.com/vi/J-zn8PdvZOU/maxresdefault.jpg", id: 7},
    { title: "MESSI AND MBAPPE IN A LEGENDARY BATTLE FOR THE TROPHY OF THE MOST EXCITING WORLD CUP FINAL EVER" , thumbnail: "https://www.youtube.com/watch?v=xR63nMzK1Ic",image:"https://cms.sabcsport.com/storage/images/lionel-messi-and-kylian-mbappe-1_1600x900.webp",id: 8},
    { title: "The BLOODIEST fight in UFC | Tony Ferguson vs Anthony Pettis." , thumbnail: "https://www.youtube.com/watch?v=Q2eXG_8As_o", image:"https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2018/10/tony-ferguson-anthony-pettis-ufc-229-1.jpg?w=1000", id: 9},
    { title: "Real Madrid 2 x 3 Barcelona ● La Liga 16/17 Extended Goals & Highlights HD" , thumbnail: "https://www.youtube.com/watch?v=i2kdIbn0Uoc",image:"https://i.ytimg.com/vi/wQZQADpna9Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA4IBhlC4VbgExJbQJx95tF54", id: 10},
    { title: "India vs Australia t20 world cup highlights | Australia vs India cricket highlights Ind vs Aus t20i" , thumbnail: "https://www.youtube.com/watch?v=2tdKmURRy3M",image:"https://english.cdn.zeenews.com/sites/default/files/2022/10/17/1104340-indausblog.jpg",id: 11},
    { title: "Cricket World Cup 2011 Final: India v Sri Lanka | Match Highlights" , thumbnail: "https://www.youtube.com/watch?v=YphL3Whh5B0",image:"https://mumbaimirror.indiatimes.com/photo/74955919.cms", id: 12}
]

const videoGrid = document.getElementById("video-grid");
const searchBar = document.getElementById("search-bar");

function renderVideos(videoList){
    videoGrid.innerHTML = "";
    videoList.forEach((video) => {
        const videoElement = document.createElement("div"); 
        videoElement.classList.add("video-thumbnail");
        videoElement.innerHTML = `
            <a href="${video.thumbnail}">
            <img src="${video.image}" alt="${video.title}" />
            </a>
            <div class="description">
              
                <p>${video.title}</p>
             </div>
            `;
    
        videoGrid.appendChild(videoElement);

    })
    };

renderVideos(videos);    

searchBar.addEventListener("input" , (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filteredVideos = videos.filter((video) => video.title.toLowerCase().includes(searchQuery));

    renderVideos(filteredVideos);
});