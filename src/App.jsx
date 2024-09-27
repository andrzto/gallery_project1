import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Barcelona} from './components/Barcelona';
import { Londres } from './components/Londres';
import { Moscu } from './components/Moscu';
import { Paris } from './components/Paris';
import { Roma } from './components/Roma';
import { Santorini } from './components/Santorini';
import { Navigation } from './components/Navigation';

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className='text-center my-3'>Gallery Project</h1>
        </div>
        <div className='container d-flex justify-content-center'>
          <Routes>
            <Route path='/barcelona' element={<Barcelona className='main-img-container'/>} />
            <Route path='/londres' element={<Londres className='main-img-container'/>} />
            <Route path='/moscu' element={<Moscu className='main-img-container'/>} />
            <Route path='/paris' element={<Paris className='main-img-container'/>} />
            <Route path='/roma' element={<Roma className='main-img-container'/>} />
            <Route path='/santorini' element={<Santorini className='main-img-container'/>} />
          </Routes>
        </div>
        <div className='container-center'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;