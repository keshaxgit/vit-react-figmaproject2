import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from '../src/components/header/header'
import Footer from '../src/components/footer/footer';
function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>

      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
