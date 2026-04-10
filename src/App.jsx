import { Navbar } from "./layout/Navbar"
import { About } from "./sections/About"
import { Contact } from "./sections/Contact"
import { Skills } from "./sections/Skills"
import { Hero } from "./sections/Hero"
import { Project } from "./sections/Project"
import ScrollToTop from "./components/arrow"


function App() {
  return (
   <div>
   {/* <div className="min-h-screen overflow-x-hidden"> */}
    <Navbar />
    <main>
      <Hero/>
      <ScrollToTop/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </main>
   </div>
  )
}

export default App
