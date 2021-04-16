import logo from './logo.svg';
import './App.css';
import Encabezado from './Encabezado'
import Menu from './Menu'
import Informacion from './Informacion'
import InformacionTwo from './InformacionTwo'
import InformacionThree from './InformacionThree'
import Footer from './Footer'
import  'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      
        <Encabezado />
        <Menu />
        <Informacion />
        <InformacionTwo />
        <InformacionThree />
        <Footer />

      
    </div>
  );
}

export default App;
