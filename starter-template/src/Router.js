// PATHS IMPORT
import AppS from './Pages/Public/AppS.js'

// IMPORTS FOR WEBSITE DESIGN
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Validation } from './includes/functions/Validation';
import  Header from  './components/Header/Header.js'
import  Footer from  './components/Footer/Footer.js'
import Cookies from 'universal-cookie';
import Characters from './Pages/Public/Characters.js';
import World from './Pages/Public/World.js';
import AboutUs from './Pages/Public/AboutUs.js';
import RPADMIN from './backend/pages/RP-ADMIN';
import HeaderBackend from './backend/components/Header_Backend/rp-HeaderBackend.js';



function Router() {

    const checkURL =()=>{
        const url = window.location.pathname
    
        const newURL = url.split("/")
    
        return newURL
    }

    const cookies = new Cookies()
    const token = cookies.get('token')
    const editMode = localStorage.getItem("editMode")

    const actPage = checkURL()



{/* useEffect(() => {
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
*/}

return (
    <>
        <BrowserRouter basename='/'>
            {actPage[1] === "rp-admin" ? <HeaderBackend /> : <Header />  }
            <div className='container mx-auto'> 
            {/* REACT ROUTER ROUTES */}
            <Routes>
            
                {/* PUBLIC PAGES */}
                <Route path='/' element={<AppS />}/>
                <Route path='/characters' element={<Characters />}/>
                <Route path='/world' element={<World />}/>
                <Route path='/about-us' element={<AboutUs />}/>
            </Routes>
            </div>
            <Routes>
                {/* Private Pages */}
                <Route path='/rp-admin' element={<RPADMIN />}/>
                <Route path='/rp-admin/media' element={<RPADMIN />}/>
                <Route path='/rp-admin/pages' element={<RPADMIN />}/>
                <Route path='/rp-admin/preference' element={<RPADMIN />}/>
                <Route path='/rp-admin/plugins' element={<RPADMIN />}/>
                <Route path='/rp-admin/design' element={<RPADMIN />}/>
            </Routes>
            { actPage[1] !== "rp-admin" && Boolean(editMode)  === true ? <a href={process.env.REACT_APP_BASE_URL+"/rp-admin"} className='fixed bottom-0 right-0 p-1 bg-red-600 hover:bg-red-700  w-32 text-center font-bold '>EDIT</a> : null }
            {/* <Footer /> */}
        </BrowserRouter>
    </>
)};

export default Router;
