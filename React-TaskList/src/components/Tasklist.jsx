import { useState } from 'react';
import Task from './Task'
import TaskForm from './TaskForm'
import '../styles/TaskList.css'

export default function TaskList() {

    const [tasques, setTasques] = useState([]);

    // Función para agregar una nueva tarea
    const afegirTasca = (tasca) => {
        const tasquesActuals = [...tasques, { id: tasques.length, text: tasca.text, completada: false }];
        setTasques(tasquesActuals);
    };

    // Función para eliminar una tarea
    const eliminarTasca = (id) => {
        const tasquesRestants = tasques.filter((tasca) => tasca.id !== id);
        setTasques(tasquesRestants);
    };

    // Función para marcar una tarea como completada
    const completarTasca = (id) => {
        const tasquesActuals = tasques.map((tasca) =>
            tasca.id === id ? { ...tasca, completada: !tasca.completada } : tasca
        );
        setTasques(tasquesActuals);
    };


    return (
        <div className="TaskList">
            <h2>Mis tareas</h2>
            <TaskForm funcAfegirTasca={afegirTasca} />
            {tasques.map((tasca) => (
                <Task
                    key={tasca.id}
                    id={tasca.id}
                    text={tasca.text}
                    completada={tasca.completada}
                    eliminarTasca={eliminarTasca}
                    completarTasca={completarTasca}
                />
            ))}
        </div>
    )
}

