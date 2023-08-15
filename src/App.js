import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';
import AddItem from './component/AddItem';
import History from './component/History';
import AddProduct from './component/AddProduct';
import AddSnC from './component/AddSnC';
function App() {
  return (  
    
      <BrowserRouter>
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/registrasiUser' element={<RegisterUser/>}></Route>
            <Route path='/addItem' element={<AddItem/>}></Route>
            <Route path='/history' element={<History/>}></Route>
            <Route path='/addproduct' element={<AddProduct/>}></Route>
            <Route path='/addsnc/:id' element={<AddSnC/>}></Route>
          </Routes>
      </BrowserRouter>

  );
}

export default App;
