import{Routes,Route} from 'react-router-dom'

import { Login } from './components/auth/Login';
import { Logout } from './components/auth/Logout';
import { Register } from './components/auth/Register';

import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import { Home } from './components/common/Home';

import { BootstrapLink } from '././components/common/StylesLink';
import { Recipies } from './components/cocktails/Recipies';
import { Cocktails } from './components/cocktails/Cocktails';

function App() {
  return (
   <>
      
      <BootstrapLink />    
      <Header/>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route  path='/login' element={<Login />}/>
          <Route  path='/logout' element={<Logout />}/>
          <Route  path='/register' element={<Register />}/>
          <Route  path='/recipies' element={<Recipies />}/>
          <Route  path='/cocktails' element= {<Cocktails />} />
          
          <Route  path='*' element={<h1>404</h1>}/>

        </Routes>
      
      <Footer />
    </>
      
            
  
  );
}

export default App;
