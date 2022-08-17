import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import FeedBack from './pages/FeedBack';
import Courses from './pages/Courses';
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <Router> 
    <div className="App">
      <SiteHeader />
      <Routes>
      <Route path="/" element={<HomePage />} /> 
        <Route exact path="/feedback/:id" element={<FeedBack />} /> 
        <Route exact path="/courses/:id" element={<Courses />} /> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
