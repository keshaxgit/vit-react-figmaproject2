import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from '../src/components/header/header'
import Footer from '../src/components/footer/footer';
import Main from '../src/components/mainpage/mainpage';

function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/" element={<Main/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
