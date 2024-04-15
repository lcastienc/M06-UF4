import { TiDeleteOutline } from "react-icons/ti";
import '../styles/Task.css'


export default function Task({ id, text, completada, eliminarTasca, completarTasca }) {
    const className = completada ? "tascaCompletada" : "";

    const handleCompletarClick = () => {
        completarTasca(id);
    };

    const handleEliminarClick = () => {
        eliminarTasca(id);
    };


    return (
        <div className="TaskCard">
            <div className={`Task ${className}`} onClick={handleCompletarClick}>
                <p>{text}</p>
            </div>
            <button type="button" onClick={handleEliminarClick}><TiDeleteOutline className="delete"/></button>
        </div>

    )
}