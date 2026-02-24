import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/pages/Home"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import NewProject from "./components/pages/NewProject"
import Projects from "./components/pages/Projects"

import Container from "./components/layout/Container"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Container customClass="minHeight" />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="company" element={<Company />} />
          <Route path="newproject" element={<NewProject />} />
        </Route>
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
