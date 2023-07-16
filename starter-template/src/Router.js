// PATHS IMPORT
import AppS from './Pages/Public/AppS.js'

// IMPORTS FOR WEBSITE DESIGN
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Validation } from './includes/functions/Validation';
import  Header from  './components/Header/Header.js'
import Cookies from 'universal-cookie';


function Router() {

    const cookies = new Cookies()
    const token = cookies.get('token')

useEffect(() => {
    (async()=>{
        try{
            if(token !== undefined && token !== null && token !== "" ){
            Validation()
            }
        } catch (error) {
            // Do Something on catch
        }
    })() 
}, [token])


return (
    <>
        <BrowserRouter basename='/'>
            <Header />
            {/* REACT ROUTER ROUTES */}
            <Routes>
                {/* PUBLIC PAGES */}
                <Route path='/' element={<AppS />}/>

                {/* Private Pages */}

            </Routes>
        </BrowserRouter>
    </>
)};

export default Router;
