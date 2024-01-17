import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Home from "./pages/Home.jsx";
import MeetTheTeam from "./pages/MeetTheTeam.jsx";
import Contact from "./pages/Contact.jsx";

// Top-level component, rendering all child components, with Home set as default page.
function App() {
  return (
    <div className="text-3xl font-bold underline">
      <Router>
         {/* Header visible across all pages */}
        <NavBar />
        <Routes>
          {/* Different paths set to be rendered, with Home set as the default */}
          <Route path="/" element={<Home />} />
          <Route path="meetTheTeam" element={<MeetTheTeam />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;