import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MarketStatusPage from './pages/MarketStatus';
import './App.css';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market-status" element={<MarketStatusPage />} />
      </Routes>
    </Router>
  );
};

export default App;
