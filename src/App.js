/* eslint-disable no-unused-vars */
import { Routes,Route} from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { CocktailProvider } from './contexts/CocktailContext';


import { Login } from './components/auth/Login/Login';
import { Logout } from './components/auth/Logout/Logout';
import { Register } from './components/auth/Register/Register';

import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import { Home } from './components/common/Home';

import { BootstrapLink } from '././components/common/StylesLink';
import { Recipies } from './components/cocktails/Recipies/Recipies';
import { Cocktails } from './components/cocktails/Cocktails/Cocktails';
import { CreateCocktail } from './components/cocktails/Cocktails/Create/CreateCocktail';
import { CocktailDetails } from './components/cocktails/Cocktails/CocktailDetails/CocktailDetails';
import { DeleteCocktail } from './components/cocktails/Cocktails/DeleteCocktail/DeleteCocktail';
import { EditCocktail } from './components/cocktails/Cocktails/EditCocktail/EditCocktail';
import './App.css';
import { FavouriteCocktails } from './components/cocktails/Favourites/Favourites';
import { UserGuard } from './guards/UserGuard';
import { GuestGuard } from './guards/GuestGuard';


function App() {

  return (
  <>

    <AuthProvider>
      <CocktailProvider>
      <BootstrapLink />    
      <Header/>
        <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route  path='/recipies' element={<Recipies />}/>
          <Route  path='/favourites' element= {<FavouriteCocktails />} />
          <Route  path='/logout'  element={<Logout />}/>
            
          <Route path='/cocktails' element= {<Cocktails  />} />
          <Route path='/cocktails/:cocktailId' element = {<CocktailDetails />} />
          
          <Route element={<GuestGuard />}>
                <Route  path='/login' element={<Login />} />
                <Route  path='/register' element={<Register />}/>
          </Route>

          <Route element={<UserGuard />}>
                <Route path='/cocktails/create' element= {<CreateCocktail />} />
                <Route path='/cocktails/:cocktailId/delete' element = {<DeleteCocktail />} />
                <Route path='/cocktails/:cocktailId/edit' element = {<EditCocktail />} />
          </Route>
          
          <Route  path='*' element={<h1>404</h1>}/>

        </Routes>
		</main>
      
      <Footer />
      </CocktailProvider>
    </AuthProvider>
  </>
      
      
            
  
  );
}

export default App;
