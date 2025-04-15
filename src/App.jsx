import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Test from './Test'
import Latest from './Latest'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/test' element={<Test/>}> </Route>
        <Route path='/latest' element={<Latest/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
