// src/App.jsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WspFloatBtn from "./components/WspFloatBtn";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Servicios /> 
      <About />
      <Contact/>
      <Footer /> 
      <WspFloatBtn />
    </>
  );
}

export default App;
