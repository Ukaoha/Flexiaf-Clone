import './App.css';
import Navbar from './Navbar';
import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Users from './pages/Users'
import Learn from './pages/Learn';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';






function App() {
  return (
    <div className="App">
      <ErrorBoundary>

      <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/learn' element={<Learn/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/contact' element={<Contact/>}/>

      <Route path='*' element={<NotFound/>}/>




    </Routes>
    </ErrorBoundary>
    </div>
    
  );
}

export default App;
  