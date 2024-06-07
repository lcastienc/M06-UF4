import { Link } from 'react-router-dom';
import './styles/Card.css';

function Card({ title, to , Image}) {
    return (
        <Link to={to} className="card-link">
            <div className="card">
                <h3>{title}</h3>
                <img src={Image} alt={title} className='card-img' />
            </div>
        </Link>
    );
}

export default Card;
