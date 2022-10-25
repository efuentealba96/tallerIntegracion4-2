import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './containers/Home';
import Solicitud from './containers/Solicitud';
import LoginPage from './components/LoginPage';
import Sidebar from './components/Sidebar';
import Inscripcion from './containers/Inscripcion';
import Documentos from './containers/Documentos';
import InfoPersonal from './containers/InfoPersonal';
import Contactos from './containers/Contactos';
import InfoAcademica from './containers/InformacionAcademica';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Sidebar/>}>
          <Route  exact path  ="/Home" name ="Home" element={<Home/>}></Route>
          <Route path ="/Solicitud" element={<Solicitud/>}></Route> 
          <Route path ="/Inscripcion" element ={<Inscripcion/>}></Route>
          <Route path="/Documentos" element={<Documentos/>}></Route>
          <Route path="/InfoPersonal" element={<InfoPersonal/>}></Route>
          <Route path ="/InfoAcademica" element={<InfoAcademica/>}></Route>
          <Route path="/Contactos" element={<Contactos/>}></Route>
        </Route>
        <Route path ="/Login" element={<LoginPage/>}></Route>
      </Routes>
      
      
      
    
     
    </Router>
  );
}

export default App;