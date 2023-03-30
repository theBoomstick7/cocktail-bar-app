import{Routes,Route, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as cocktailsService from './services/cocktailService';
import { AuthContext } from './contexts/AuthContext';
import * as authService from './services/authService'

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
const [auth, setAuth] = useState({})


    useEffect(() => {
        cocktailsService.getAll()
        .then(result => {
            setCocktails(result);
        })
    }, []);

  

const onLoginSubmit = async (data) => {
        try {
          const result =  await authService.login(data)
          setAuth(result)
          
          navigate('/')
        } catch (error) {
          console.log(error)
          throw new Error(error.message)
        }
        
    }

    const onRegisterSubmit = async(values) =>{
      const {RePass, ...registerData} = values
      if(RePass !== registerData.Password) {
        throw new Error('Passwords don`t match')

      }

      try {
        const result = await authService.register(registerData)
        setAuth(result)

        navigate('/')
      } catch (error) {
        console.log(error)
        throw new Error(error.message)
      }
    }

     const onLogout = async (token) =>{
      setAuth({})
      return
    };

      const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token : auth.accessToken,
        userEmail : auth.email,
        username: auth.username,
        isAuthenticated : !!auth.accessToken,
      }
      
      const onCreateCocktailSubmit = async (data) => {
        debugger
          const newCocktail = await cocktailsService.create(data,auth.accessToken);
  
          setCocktails(state => [...state, newCocktail]);
  
          navigate('/cocktails')
      }
  return (
  <>

    <AuthContext.Provider value={context}>

      <BootstrapLink />    
      <Header/>
        <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route  path='/login' element={<Login />} />
          <Route  path='/logout'  element={<Logout />}/>
          <Route  path='/register' element={<Register />}/>
          <Route  path='/recipies' element={<Recipies />}/>
          <Route  path='/cocktails' element= {<Cocktails cocktails={cocktails} />} />
          <Route  path='/blogs' element= {<Blogs />} />
          <Route path='/cocktails/create' element= {<CreateCocktail onCreateCocktailSubmit={onCreateCocktailSubmit}/>} />

          
          <Route  path='*' element={<h1>404</h1>}/>

        </Routes>
		</main>
      
      <Footer />
    </AuthContext.Provider>
  </>
      
      
            
  
  );
}

export default App;
