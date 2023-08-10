import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';
function App() {
  return (  
    
      <BrowserRouter>
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/registrasiUser' element={<RegisterUser/>}></Route>
          </Routes>
      </BrowserRouter>

  );
}

export default App;
