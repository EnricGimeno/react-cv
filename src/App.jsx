import './App.css'

import Header from './Header';
import Experience from './Experience';
import Contact from './Contact';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Experience />
        <Contact />
        {/* Importa y añade más componentes según necesites */}
      </div>
    </>
  )
}

export default App
