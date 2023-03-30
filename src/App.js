import './App.css';

import {Route, Routes} from 'react-router-dom'

import Movies from './pages/Movies/Movies';
import NavbarComponent from './components/Navbar/NavbarComponent';
import TVSeries from './pages/TVSeries/TVSeries';
import Trending from './pages/Trending/Trending';

function App() {
  return (
<>
<NavbarComponent/>
    <Routes>
    <Route  exact path='/' Component={Movies}/>
    <Route  exact path='/trending' Component={Trending}/>
    <Route  exact path='/series' Component={TVSeries}/>
    </Routes>
 </>
  );
}

export default App;
