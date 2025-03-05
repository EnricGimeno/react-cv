import cvdata from './data/cvdata.json'

function Header() {
    // Importar la información necesaria de cvdata
    const { header } = cvdata;
    return (
        <header className="container text-center mt-4 p-4 border-bottom border-primary">
            <h1 className="text-dark">{header.nombre}</h1>
            <p className="text-muted">{header.resumen}</p>
        </header>
        );
}

export default Header;