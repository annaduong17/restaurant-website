import HomePage from './components/HomePage';
import Footer from './components/Footer';
import SpecialEventsPage from './components/SpecialEventsPage';
import SocialEventsPage from './components/SocialEventsPage';
import ReservationsPage from './components/ReservationsPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/special-events' element={<SpecialEventsPage />}/>
          <Route path='/social-events' element={<SocialEventsPage />}/>
          <Route path='/reservations' element={<ReservationsPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
