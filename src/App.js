import{Routes,Route, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as cocktailsService from './services/cocktailService';

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
const navigate = useNavigate();
const [cocktails, setCocktails] =useState([]);

    useEffect(() => {
        cocktailsService.getAll()
        .then(result => {
            setCocktails(result);
        })
    }, []);

    const onCreateCocktailSubmit = async (data) => {
        const newCocktail = await cocktailsService.create(data);

        setCocktails(state => [...state, newCocktail]);

        navigate('/cocktails')
    }
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
          <Route  path='/cocktails' element= {<Cocktails cocktails={cocktails} />} />
          <Route  path='/blogs' element= {<Blogs />} />
          <Route path='/cocktails/create' element= {<CreateCocktail onCreateCocktailSubmit={onCreateCocktailSubmit}/>} />

          
          <Route  path='*' element={<h1>404</h1>}/>

        </Routes>
		</main>
      
      <Footer />
    </>
      
            
  
  );
}

export default App;
