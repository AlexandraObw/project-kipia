import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import OrderRepairPage from './pages/OrderRepairPage/OrderRepairPage';
import OrderSelectionPage from './pages/OrderSelectionPage/OrderSelectionPage';
import Footer from './components/Footer/Footer';

function App() {

    return (
        <div className="App">
            <Header/>
            <main className={'content'}>main</main>
            <Footer/>
            <Routes>
                <Route path = {'main'} element = {<MainPage />}/>
                <Route path = {'catalog'} element = {<CatalogPage />}/>
                <Route path = {'contacts'} element = {<ContactsPage />}/>
                <Route path = {'order-repair'} element = {<OrderRepairPage />}/>
                <Route path = {'order-selection'} element = {<OrderSelectionPage />}/>
                <Route path = {'login'} element = {<LoginPage />}/>
            </Routes>
        </div>
  );
}

export default App;
