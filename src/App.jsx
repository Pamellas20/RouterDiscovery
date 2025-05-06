import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import UserProfile from "./Components/UserProfile";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-50">
        <NavBar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:id" element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
