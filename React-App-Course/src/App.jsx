
import React from "react";
import Carlist from "./Components/CarList.jsx"
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx";
import "./assets/Style/Header.css"
import "./assets/Style/CarList.css";
import "./assets/Style/Form.css"
import Form from "./Components/Form.jsx";



function App() {
  return (
    <>
      <Header />
      <Carlist /> 
      <Form />
      <Footer />
     </>
  )
}

export default App
