
import{BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About  from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
// import PageNo from './pages/Home'

function App() {
 

  return (
    <div className="mainContainer">
        <BrowserRouter>
          <Header/>
          <Routes>
             <Route path='/' element ={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path='/contact' element = {<Contact/>}/>
            <Route path="*" element={<NotFound/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>

    </div>
  )
}

export default App
