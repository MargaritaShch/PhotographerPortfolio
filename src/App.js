import React from 'react';
import './App.css';
import Header from './Header/Header';
import Portfolio from './Portfolio/Portfolio'
import Footer from './Footer/Footer';
import WedPage from './Pages/WedPage';
import LoveStoryPage from './Pages/LoveStoryPage';
import PortraitPage from './Pages/PortraitPage';
import CommercePage from './Pages/CommercePage';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/wedpage" element={<WedPage />} />
            <Route path="/lovestorypage" element={<LoveStoryPage />} />
            <Route path="/portrait" element={<PortraitPage />} />
            <Route path="/commerce" element={<CommercePage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
