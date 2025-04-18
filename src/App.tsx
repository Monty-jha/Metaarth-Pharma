import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Research from './pages/Research';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import News from './pages/News';

// import Leadership from './pages/Leadership';
// import Manufacturing from './pages/Manufacturing';
// import Quality from './pages/Quality';
// import Sustainability from './pages/Sustainability';
// import Innovation from './pages/Innovation';
// import GlobalPresence from './pages/GlobalPresence';
// import Compliance from './pages/Compliance';
// import Partners from './pages/Partners';

function App() {
  return (
    <Router>
     <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/news" element={<News />} />
            {/* <Route path="/leadership" element={<Leadership />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/global-presence" element={<GlobalPresence />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/partners" element={<Partners />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;