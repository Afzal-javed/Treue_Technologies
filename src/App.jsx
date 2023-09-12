import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Skill from "./Pages/Skill"
import Education from "./Pages/Education"
import Projects from "./Pages/Projects"
import PageNotFound from "./Pages/PageNotFound"
import Footer from "./Components/Footer"

function App() {


  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter> */}
      <Home />
      <About />
      <Skill />
      <Education />
      <Projects />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
