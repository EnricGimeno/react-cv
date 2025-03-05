import cvdata from './data/cvdata.json'

function Contact() {
    // Importar la información necesaria de cvdata
    const { contacto } = cvdata;
    return (
        <section className="container mt-4 p-4 border rounded shadow-sm bg-light">
            <h2 className="text-primary">Contacto</h2>
            <ul className="list-unstyled">
                <li><strong>Teléfono:</strong> <span>{contacto.telefono}</span></li>
                <li><strong>Email:</strong> <span>{contacto.email}</span></li>
                <li><strong>LinkedIn:</strong> <a href={contacto.linkedin} target="_blank" rel="noopener noreferrer" className="text-decoration-none">{contacto.linkedin}</a></li>
                <li><strong>GitHub:</strong> <a href={contacto.github} target="_blank" rel="noopener noreferrer" className="text-decoration-none">{contacto.github}</a></li>
            </ul>
        </section>
    );
}

export default Contact;
