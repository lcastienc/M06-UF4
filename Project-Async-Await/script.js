// Claus
const keys = {
    api_key: 'e8c0776f6dab0b1f740f2fa966572fff',
    session_id: 'd4631aa773b056671e8c41d8395a5bd1c928fb72',
    account_id: '21215183'
}

let moviesResult = document.getElementById("moviesResult");

async function setFav(id, favBool){
    try {
        // Fes la crida a l'API per canviar l'estat de favorit de la pel·lícula
        const url = `https://api.themoviedb.org/3/account/${keys.account_id}/favorite?api_key=${keys.api_key}&session_id=${keys.session_id}`;
        const data = {
            media_type: "movie",
            media_id: id,
            favorite: !favBool // Inverteix el valor booleà per canviar l'estat de favorit
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(url, options);
        const responseData = await response.json();

        // Log del resultat
        console.log(`id ${id} marked as ${!favBool}`);

        // Torna a cridar showFavs per actualitzar el llistat de pel·lícules favorites
        showFavs();
    } catch(err){
        console.log(err);
    }
}

async function showFavs(){
    moviesResult.innerHTML="";
    try {
        const url = `https://api.themoviedb.org/3/account/${keys.account_id}/favorite/movies?language=en-US&page=1&api_key=${keys.api_key}&session_id=${keys.session_id}&sort_by=created_at.asc`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const favoritesMovies = data.results;
        favoritesMovies.forEach(favMovie => printMovie(favMovie,true,false));
        console.log(favoritesMovies);

        for (const favMovie of favoritesMovies){
            printMovie(favMovie,true,false);
        }
    }catch(err){
        console.log(err);
    }
}

async function searchMovies(query){
    moviesResult.innerHTML = "";
    try{
        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${keys.api_key}&session_id=${keys.session_id}`;
        const response = await fetch(url)
        const data = await response.json();
        const searchResults = data.results;

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
        searchMovies(this.value);
    }
});

// Click a la lupa
document.querySelector(".searchBar i").addEventListener("click", ()=>searchMovies(document.getElementById("search").value));

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

//Scroll
let loading = false; // Define la variable loading fuera del evento de scroll
let current_page = 1; // Define la variable current_page y dale un valor inicial
let total_pages = 0; // Define la variable total_pages y dale un valor inicial

//Scroll
let loadingIndicator = document.getElementById("loadingIndicator");

window.addEventListener('scroll', async () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading && current_page < total_pages) {
        loading = true;
        current_page++;
        // Muestra el GIF de carga
        loadingIndicator.style.display = "block";
        await searchMovies(document.getElementById("search").value);
        // Oculta el GIF de carga
        loadingIndicator.style.display = "none";
    }
});