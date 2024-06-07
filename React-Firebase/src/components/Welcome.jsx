import { useState } from 'react';
import './styles/Welcome.css';
import IndexMenu from '../pages/IndexMenu';

function Welcome() {
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, SetError] = useState('');
    
    //comprobar que el campo del nombre no este vacio
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === '') {
            // alert('Introduce tu nombre')
            console.log('Introduce tu nombre')
            SetError('No has introducido tu nombre, por favor introducelo')
        }else{
            SetError('')
            setSubmitted(true);
            localStorage.setItem('name', name);
        }
    };

    const handleChange = (e) => {
        setName(e.target.value);
    };

    if (!submitted) {
        return(
            <div className='container'>
                <form className='form-group' onSubmit={handleSubmit}>
                    <h1>Por favor introduce tu nombre:</h1>
                    <input className='inputName' type="text" value={name} onChange={handleChange} />
                    <input className='buttonName' type="submit" value="Enviar" />
                    {error && <p className='error'>{error}</p>}
                </form>
            </div>
        );
    }else{
        return(
            <div>
                <h1>¡Hola {name}!</h1>
                <h3>Pel·lícules per a l’estiu</h3>
                <h4>Que vols fer?</h4>
                <IndexMenu />
            </div>
        );  
    }
}

export default Welcome;