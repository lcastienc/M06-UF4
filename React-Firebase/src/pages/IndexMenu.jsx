// src/pages/IndexMenu.jsx
import Card from '../components/Card';

function IndexMenu() {
  return (
    <div>
      <Card link="/movies/list" title="Llistat de pel·lícules" />
      <Card link="/movies/add" title="Afegir una pel·lícula" />
    </div>
  );
}

export default IndexMenu;
