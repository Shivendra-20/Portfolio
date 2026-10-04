import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import AboutSection from './components/About'
import SkillsSection from './components/Skill'
import ProjectsSection from './components/Project'
import ContactSection from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App