import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'
import AddMenu from './components/AddMenu'
import MenuItems from './components/MenuItems'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Menu />
          </>
        } />
        <Route path="/admin" element={
          <>
            <MenuItems />
            <AddMenu />

          </>
        } />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App