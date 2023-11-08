import Login from './paginas/login';
import Registro from './paginas/registro';
import MedicationTable from './paginas/registroMed';
import Modal from './paginas/modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes }  from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/medicinas' element={<MedicationTable/>} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/modal' element={<Modal/>}/>
      </Routes>
    </Router>

  );
}

export default App;
