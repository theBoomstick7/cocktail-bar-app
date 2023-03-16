import{Routes,Route} from 'react-router-dom'

import { Login } from './components/auth/Login/Login';
import { Logout } from './components/auth/Logout/Logout';
import { Register } from './components/auth/Register/Register';

import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import { Home } from './components/common/Home';

import { BootstrapLink } from '././components/common/StylesLink';
import { Recipies } from './components/cocktails/Recipies/Recipies';
import { Cocktails } from './components/cocktails/Cocktails/Cocktails';
import { Blogs} from './components/blogs/Blogs/Blogs'
import { CreateCocktail } from './components/cocktails/Cocktails/Create/CreateCocktail';

function App() {
  return (
   <>

      
      <BootstrapLink />    
      <Header/>
        <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route  path='/login' element={<Login />}/>
          <Route  path='/logout' element={<Logout />}/>
          <Route  path='/register' element={<Register />}/>
          <Route  path='/recipies' element={<Recipies />}/>
          <Route  path='/cocktails' element= {<Cocktails />} />
          <Route  path='/blogs' element= {<Blogs />} />
          <Route path='/cocktails/create' element= {<CreateCocktail />} />

          
          <Route  path='*' element={<h1>404</h1>}/>

        </Routes>
		</main>
      
      <Footer />
    </>
      
            
  
  );
}

export default App;
