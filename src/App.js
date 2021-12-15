import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
      <Routes>

        <Route path = {'/'} element={<Layout/>}/>
        <Route index element = {<IndexPage/>}/>
        <Route path = {'catalog'} element = {<CatalogPage/>}/>
        <Route path = {'contacts'} element = {<ContactsPage/>}/>
        <Route path = {'login'} element = {<LoginPage/>}/>
        <Route path = {'order-repair'} element = {<OrderRepairPage/>}/>
        <Route path = {'order-selection'} element = {<OrderSelectionPage/>}/>
      </Routes>
  );
}

function Layout() {
    return(
       <div className="App">
           <Header />
           <main className={'content'}>
               <outlet/>
           </main>
           <Footer/>
       </div>
    )
}

export default App;
