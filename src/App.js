import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import Appoinment from './Pages/Appoinment/Appoinment';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appoinment' element={<Appoinment></Appoinment>}></Route>
      </Routes>
    </div>
  );
}
export default App;
