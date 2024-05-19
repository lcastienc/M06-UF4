// Claus
const keys = {
    api_key: 'e8c0776f6dab0b1f740f2fa966572fff',
    session_id: 'd4631aa773b056671e8c41d8395a5bd1c928fb72',
    account_id: '21215183'
}

let moviesResult = document.getElementById("moviesResult");
let loadingIndicator = document.getElementById("loadingIndicator");

function setFav(id, favBool) {
    try {
        
        const url = `https://api.themoviedb.org/3/account/${keys.account_id}/favorite?api_key=${keys.api_key}&session_id=${keys.session_id}`;
        const data = {
            media_type: "movie",
            media_id: id,
            favorite: favBool
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch(url, options)
            .then(response => response.json())
            .then(responseData => {
                // Log del resultado
                console.log(`id ${id} marked as ${favBool}`);
                // Vuelve a llamar a showFavs para actualizar la lista de películas favoritas
                showFavs();
            })
            .catch(err => console.log(err));
    } catch (err) {
        console.log(err);
    }
}

async function showFavs(){
    moviesResult.innerHTML="";
    try {
        const url = `https://api.themoviedb.org/3/account/${keys.account_id}/favorite/movies?language=en-US&page=1&api_key=${keys.api_key}&session_id=${keys.session_id}&sort_by=created_at.asc`;
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        const favoritesMovies = data.results;
        favoritesMovies.forEach(favMovie => printMovie(favMovie,true,false));
        console.log(favoritesMovies);

        // for (const favMovie of favoritesMovies){
        //     printMovie(favMovie,true,false);
        // }
    }catch(err){
        console.log(err);
    }
}

async function searchMovies(query, cleanResults = true){
    if (cleanResults) {
        moviesResult.innerHTML = "";
        current_page = 1;
    }
    loadingIndicator.style.display = 'flex';
    try{
        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${current_page}&api_key=${keys.api_key}&session_id=${keys.session_id}`;
        const response = await fetch(url)
        const data = await response.json();
        const searchResults = data.results;
        total_pages = data.total_pages;

        for (const movie of searchResults){
            const urlCheck = `https://api.themoviedb.org/3/movie/${movie.id}/account_states?api_key=${keys.api_key}&session_id=${keys.session_id}`;
            const responseCheck = await fetch(urlCheck);
            const dataCheck = await responseCheck.json();
            const isFavorite = dataCheck.favorite;

            printMovie(movie, isFavorite, false);
        }
    }catch (err){
        console.log(err)
    }
    loadingIndicator.style.display = 'none';
    clearInput();
    removeActive();
}


/* FUNCIONS D'INTERACCIÓ AMB EL DOM */

// Click Favorites
document.getElementById("showFavs").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    showFavs();
})

// Click Watchlist
document.getElementById("showWatch").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    //showWatch();
})

/* Funcions per detectar la cerca d'una pel·lícula */
// Intro a l'input
document.getElementById("search").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        query = this.value;
        searchMovies(this.value,true);
    }
});

// Click a la lupa
// document.querySelector(".searchBar i").addEventListener("click", ()=>searchMovies(document.getElementById("search").value));
document.querySelector(".searchBar i").addEventListener("click", () => {
    query = document.getElementById("search").value;
    searchMovies(query, true);
});

// Netejar l'input
document.getElementById("search").addEventListener('click', ()=>clearInput());

function clearInput(){
    document.getElementById("search").value="";
}

// Elimina l'atribut active del menú
function removeActive(){
    document.querySelectorAll(".menu li a").forEach(el=>el.classList.remove("active"));
}

/* Funció per printar les pel·lícules */
function printMovie(movie, fav, watch){
    let favIcon = fav ? 'iconActive' : 'iconNoActive';
    let watchIcon = watch ? 'iconActive' : 'iconNoActive';

    moviesResult.innerHTML += `<div class="movie">
                                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
                                    <h3>${movie.original_title}</h3>
                                    <div class="buttons">
                                        <a id="fav" onClick="setFav(${movie.id}, ${!fav})"><i class="fa-solid fa-heart ${favIcon}"></i></a>
                                        <a id="watch" onClick="setWatch(${movie.id}, ${!watch})"><i class="fa-solid fa-eye ${watchIcon}"></i></a>
                                    </div>`;
}


let current_page = 1; // Define la variable current_page y dale un valor inicial
let total_pages = 0; // Define la variable total_pages y dale un valor inicial
let query = '';

//Scroll
window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && current_page < total_pages) {
        current_page++;
        loadingIndicator.style.display = "flex";
        setTimeout(() => {
            searchMovies(query, false);
        }, 500);
    }
});