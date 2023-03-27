// import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Home  from './componeant/Home'
import PageNotFound from './componeant/PageNotFound';
import Navbar from './layout/Navbar';
import Conect from './layout/Conect';
import About from './componeant/About';
import AddUser from './componeant/AddUser';
import Edit from './componeant/Edit';


function App() {
  return (
   
        <BrowserRouter>
           <Navbar/>
            <Container>
              <Routes>
                  <Route>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/conect" element={<Conect />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/adduser" element={<AddUser />} />
                  <Route path="/edit/:id" element={<Edit />} />



                  <Route path="*" element={<PageNotFound />} />
                  </Route>
              </Routes>
               </Container>
        </BrowserRouter>
    
  );
}

export default App;
