import React, { useState } from 'react';

export default function TaskForm({ funcAfegirTasca }) {
    const [textTasca, setTextTasca] = useState('');

    const canviTextTasca = (e) => {
        setTextTasca(e.target.value);
        console.log('value is:', e.target.value);
    };

    const enviarForm = (e) => {
        e.preventDefault();
        const tascaNova = {
            text: textTasca,
            completada: false
        };
        funcAfegirTasca(tascaNova);
        setTextTasca(''); // Limpiar el input después de enviar el formulario
    };

    return (
        <div>
            <form onSubmit={enviarForm}>
                <input
                    type="text"
                    placeholder="Introducir tarea"
                    value={textTasca}
                    onChange={canviTextTasca}
                />
                <button type="submit">Agregar Tarea</button>
            </form>
        </div>
    );
}
