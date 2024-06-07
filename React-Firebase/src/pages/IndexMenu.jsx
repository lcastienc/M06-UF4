import Card from '../components/Card';
import ListMovies from '../img/movies-list.png'
import AddMovie from '../img/pelicula.png'

function IndexMenu() {
    const username = localStorage.getItem('name');
    return (
        <div>
            {username && <h1>!Hola, {username}!</h1>}
            <Card to="/movies/list" title="Llistat de pel·lícules" Image={ListMovies}/>
            <Card to="/movies/add" title="Afegir pel·lícula" Image={AddMovie} />
        </div>
    );
}

export default IndexMenu;
