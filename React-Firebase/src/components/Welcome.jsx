// src/components/Welcome.jsx
import { useState } from 'react';
import './styles/Welcome.css'
import IndexMenu from '../pages/IndexMenu';

function Welcome() {
    const [name, setName] = useState('');
    const [submmited, setSubmited] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim === '') {
            alert('Introduce tu nombre')
        }else{
            setSubmited(true);
        }
    };

    const handleChange = (e) => {
        setName(e.target.value);
    };

    if (!submmited) {
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    Por favor introduce tu nombre:
                    <input type="text" value={name} onChange={handleChange} />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        );
    }else{
        return(
            <div>
                <h1>¡Hola {name}!</h1>
                <p>Pel·lícules per a l’estiu</p>
                <IndexMenu />
            </div>
        );  
    }
}

export default Welcome;