import './index.css'; // Tailwind CSS
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import UserProfile from './Components/UserProfile';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="p-6">
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path="/users/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;