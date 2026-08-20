import NavBar from './components/NavBar/NavBar.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import TechStack from './components/TeckStack/TechStack.jsx'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <HeroSection />
      <TechStack 
        techStack={['html5', 'css3', 'javascript', 'typescript', 'react', 'next.js', 'node.js', 'express.js', 'ai engineering', 'python', 'docker']} 
      />
    </>
  )
}

export default App
