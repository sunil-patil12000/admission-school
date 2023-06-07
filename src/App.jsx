import './bootstrap.min.css'
import './lib/js/main2'
import './lib/animate/animate.min.css'
import './App.css'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Register'
import Nav from './components/Nav'
import About from './components/About'
import Login from './Login'

import Admin from './Admin/Admin'
import Admission from './components/Admission'
import AdminPanel from './components/Admin'
import Profile from './Profile'
import OTPVerification from './components/OTPpage'
import Satff from './components/Satff'
import Staff from './components/Satff'
import LibraryPage from './components/Libabry'
import GalleryPage from './components/Gallery'


function App() {


  return (
    <>


      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/library' element={<LibraryPage />} />
        <Route path='/gallery' element={<GalleryPage />} />

        <Route path='/otp-verifying' element={<OTPVerification />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/admin' element={<AdminPanel />} />
        <Route index element={<Home />} />
      </Routes>






    </>
  )
}

export default App
