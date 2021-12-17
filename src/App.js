import './App.css';
import {Routes, Route, Outlet} from 'react-router-dom';
import Header from './components/Header/Header';
import Index from './pages/Index/Index';
import Catalog from './pages/Catalog/Catalog';
import Contacts from './pages/Contacts/Contacts';
import Login from './pages/Login/Login';
import OrderRepair from './pages/OrderRepair/OrderRepair';
import OrderSelection from './pages/OrderSelection/OrderSelection';
import Footer from './components/Footer/Footer';
import Error from "./pages/Error/Error";
import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext(null);

function App() {

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
    if (localStorage.getItem('isAuth')) {
        setIsAuth(true)
    }
    }, [])

    function login() {
        setIsAuth(true)
        localStorage.getItem('isAuth', 'true')
    }

    function logout() {
        setIsAuth(true)
        localStorage.removeItem('isAuth')
    }

    const context = {isAuth,setIsAuth, login, logout}

    return (
        <div className="App">
            <AuthContext.Provider value={context}>
                <Routes>
                    <Route path = {'/'} element = {<Layout />}>
                        <Route index element = {<Index />}/>
                        <Route path = {'catalog'} element = {<Catalog />}/>
                        <Route path = {'contacts'} element = {<Contacts />}/>
                        <Route path = {'order-repair'} element = {<OrderRepair />}/>
                        <Route path = {'order-selection'} element = {<OrderSelection />}/>
                        <Route path = {'login'} element = {<Login />}/>
                        <Route path = "*" element = {<Error />}/>
                    </Route>
                </Routes>
                </AuthContext.Provider>
        </div>
  )
}

const Layout = () => {
     return (
         <div className="App">
             <Header/>
             <main className="main body__main">
                 <Outlet/>
             </main>
             <Footer/>
             </div>
     )
}

export default App;