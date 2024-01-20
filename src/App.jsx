import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Home from "./pages/Home.jsx";
import Team from "./pages/Team.jsx";
import ContactUs from "./pages/Contact.jsx";
import Footer from "./Footer.jsx";
import UserLocation from "./UserLocation.jsx";

// Top-level component, rendering all child components, with Home set as default page.
function App() {
  return (
    <div>
      <Router>
        {/* Header visible across all pages */}
        <NavBar />
        <UserLocation />
        {/* <WelModal />  - temporarily disabled to test out the UserLocation*/}
        <Routes>
          {/* Different paths set to be rendered, with Home set as the default */}
          <Route path="/" element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
