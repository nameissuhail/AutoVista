import './App.css';
import { Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage';
// import CarDetails from './pages/CarDetails';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} />
      {/* <Route path='/cardetails' element={<CarDetails/>} /> */}
    </Routes>
  );
}

export default App;
