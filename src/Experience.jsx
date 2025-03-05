import cvdata from './data/cvdata.json'

function Experience() {
    // Importar la información necesaria de cvdata
    const { experiencia_laboral } = cvdata;

    return (
        <section className="container mt-4">
            <h2 className="text-center mb-4">Experiencia</h2>
            <div className="row">
                {experiencia_laboral.map((exp, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-4">
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <h5 className="card-title text-primary">{exp.empresa}</h5>
                                <p className="card-text"><strong>Puesto:</strong> {exp.puesto}</p>
                                <p className="card-text text-muted">
                                    <strong>Desde:</strong> {exp.fecha_inicio} <strong>Hasta:</strong> {exp.fecha_fin}
                                </p>
                                <ul className="list-group list-group-flush">
                                    {exp.tareas.map((tarea, tareaIndex) => (
                                        <li key={tareaIndex} className="list-group-item">{tarea}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
