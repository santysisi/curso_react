import React from "react";
import {BrowserRouter , Routes , Route} from "react-router-dom";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import NovedadesPage from "./pages/NovedadesPage";
import ServiciosPage from "./pages/ServiciosPage";

function App() {
  return(
    <div className="App">
      <Header/>

      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="servicios" element={<ServiciosPage/>}/>
        <Route path="novedades" element={<NovedadesPage/>}/>
        <Route path="contacto" element={<ContactoPage/>}/>
      </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  )
}

export default App;
