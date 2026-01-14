import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Home from './components/Home';

export default function App() {

  const theme = useSelector((state) => state.ui.theme);

  return (
    <div className={theme === 'dark' ? "dark" : ""}>
      <div className="min-h-screen bg-white text-gray-800 dark:bg-[#252128] dark:text-gray-100 transition-colors">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
   </div>
  );
}
