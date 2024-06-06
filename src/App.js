import './App.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Go_on_vacation} from './Pages/Go_on_vacation';
import HomePage from './Pages/Home';
import  Login  from './Pages/Login';
import Sign_in from "./Pages/Sign_in"




function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Go_on_vacation' element={<Go_on_vacation/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Sign_in' element={<Sign_in/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>

    </div>
  
    
    
  );  
}

export default App;
