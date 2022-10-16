import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Inscripcion from './pages/Inscripcion';
import Solicitud from './pages/Solicitud';
import InfoPe from './pages/InfoPe';
import {Documentoss} from './pages/Documentos';
import { Contactoss } from './pages/Contactos';
import Sidebar from './components/Sidebar';
import { InformacionAcad } from './pages/InformacionAcad';
import Login from './components/Navegacion/Login';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        
        <Routes>
          <Route path='/Login' element={<Login/>}/>
          <Route path="/" exact element={<Sidebar/>}>
            <Route path='/Solicitud' element={<Solicitud/>}/>
            <Route path='/Inscripcion' element={<Inscripcion/>}/>
            <Route path='/InformacionAcad' element={<InformacionAcad/>}/>
            <Route path='/InfoPe' element={<InfoPe/>}/>
            <Route path='/Docs' element={<Documentoss/>}/>
            <Route path='/Contactos' element={<Contactoss/>}/>
          </Route>
        </Routes>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
