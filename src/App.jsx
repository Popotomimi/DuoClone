// CSS
import "./App.css";

// Components
import Quiz from "./components/Quiz";
import Navbar from "./components/Navbar";

// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Learn from "./pages/Learn";
import Store from "./pages/Store";
import Songs from "./pages/Songs";
import Leagues from "./pages/Leagues";
import Pratice from "./pages/Pratice";
import Profile from "./pages/Profile";
import Missions from "./pages/Missions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Learn />} />
        <Route path="/characters" element={<Songs />} />
        <Route path="/practice" element={<Pratice />} />
        <Route path="/leagues" element={<Leagues />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/store" element={<Store />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quiz/:id" element={<Quiz />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
