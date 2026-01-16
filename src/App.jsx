import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { ToastContainer } from 'react-toastify';

import PortfolioProvider from './components/PortfolioProvider';
import Home from './components/Home';
import ContactPage from './components/ContactPage';
import ThankYouPage from './components/ThankYouPage';

export default function App() {

  const theme = useSelector((state) => state.ui.theme);

  return (
    <div className={theme === 'dark' ? "dark" : ""}>
      <div className="min-h-screen font-inter bg-white text-gray-800 dark:bg-[#252128] dark:text-gray-100 transition-colors">
        <PortfolioProvider>
          <Router>
            <Routes>  
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path='/thank-you' element={<ThankYouPage />} />
            </Routes>
          </Router>

          <ToastContainer
            position="top-right"
            autoClose={3000} 
            theme={theme === 'dark' ? "dark" : "light"}
          />
        </PortfolioProvider>
      </div>
   </div>
  );
}
