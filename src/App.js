import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './Header'

function App() {



  return (
    <div className="App">
      <Header />
      <Routes>
				<Route path='/' element={<Home />} />
        <Route path='work' element={<Work />} />
				<Route path='about' element={<About/>} />
				<Route path='contact' element={<Contact />} />
			</Routes>
    </div>
  );
}

export default App;
