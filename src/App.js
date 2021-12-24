import './App.css';
import {Routes, Route, Outlet} from 'react-router-dom';
import Header from './components/Header/Header';
import Index from './pages/Index/Index';
import Catalog from './pages/Catalog/Catalog';
import Contacts from './pages/Contacts/Contacts';
import Login from './pages/Login/Login';
import OrderRepair from './pages/OrderRepair/OrderRepair';
import Footer from './components/Footer/Footer';
import Error from "./pages/Error/Error";
import {createContext, useContext, useEffect, useState} from "react";
import Private from "./pages/Private/Private";
import CatalogItem from "./pages/CatalogItem/CatalogItem";
import Modal from "./components/Modal/Modal";
import ViewRequests from "./pages/ViewRequests/ViewRequests";

export const AppContext = createContext(null);

function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [isVisible, setIsVisible] = useState ({
        repair: false,
        requests: false
        }
    );

    useEffect(() => {
    if (localStorage.getItem('isAuth')) {
        setIsAuth(true)
    }
    }, [])

    function login() {
        setIsAuth(true)
        localStorage.setItem('isAuth', 'true')
    }

    function logout() {
        setIsAuth(false)
        localStorage.removeItem('isAuth')
    }

    const context = {isAuth,setIsAuth, isVisible, setIsVisible, login, logout}

    return (
        <AppContext.Provider value={context}>
            <div className="App">
                <Routes>
                    <Route path = {'/'} element = {<Layout />}>
                        <Route index element = {<Index />}/>
                        <Route path = {'contacts'} element = {<Contacts />}/>
                        <Route path = {'private'} element = {<Private />}/>
                        <Route path = {'order-repair'} element = {<OrderRepair />}/>
                        <Route path = {'view-requests'} element = {<ViewRequests />}/>
                        <Route path = {'login'} element = {<Login />}/>
                        <Route path = "*" element = {<Error />}/>
                        <Route path = {'catalog'} element = {<CatalogLayout />}>
                            <Route index element = {<Catalog />}/>
                            <Route path = {':id'} element = {<CatalogItem />}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </AppContext.Provider>
  )
}

const Layout = () => {
    const {isVisible, setIsVisible} = useContext(AppContext);
    return (
        <div className="App">
            <Header/>
            <Modal isOpened = {isVisible.repair}
                   isClosed={() => setIsVisible({isVisible, repair: false})} >
                <OrderRepair />
            </Modal>
            <Modal isOpened = {isVisible.requests}
                   isClosed={() => setIsVisible({isVisible, requests: false})} >
                <ViewRequests />
            </Modal>
            <main className="main body__main">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

const CatalogLayout = () => {
        return (
            <div className="App">
                <main>
                    <Outlet/>
                </main>
            </div>
        )
    }

export default App;