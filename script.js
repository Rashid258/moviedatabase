const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=df79252b4ea4441377879cafb03a78b2';
const apiKey = 'df79252b4ea4441377879cafb03a78b2';
const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const movieBox = document.querySelector('.movie-grid');
const imagePath = 'https://image.tmdb.org/t/p/w500';
const searchAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=df79252b4ea4441377879cafb03a78b2&query=""';

const getData = async (api) => {
    const response = await fetch(api)
    const data = await response.json();
    console.log(data)
    showMovies(data.results)
};
const showMovies = (data) => {
    movieBox.innerHTML = "";
    data.forEach(
        (item)=> {
            // console.log(item)
            const box = document.createElement('div');
            box.classList.add('box');
            box.innerHTML = `
            <img src="${imagePath + item.poster_path}" alt="">
            <div class="overlay">
                <div class="title">
                    <h2>Title: ${item.original_title}</h2>
                    <span>Rating: ${item.vote_average}</span>
                </div>
                <h3>Overview:</h3>
                <p>${item.overview}</p>
                `;
            movieBox.appendChild(box)
        }
    )
};
searchBox.addEventListener
('keyup', 
function(event){
    // console.log(event)
    if(event.target.value != ""){
        getData(searchAPI + event.target.value)
    }
    else{
        getData(apiUrl);
    }
}
);
getData(apiUrl);