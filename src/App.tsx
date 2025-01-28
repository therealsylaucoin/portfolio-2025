import { StyleSheetManager } from 'styled-components';
import Header from './components/header/header';
import AboutSection from './components/about/aboutSection';
import ProjectsSection from './components/projects/projectsSection';
import SkillsSection from './components/skills/skillsSection';
import Footer from './components/footer/footer';
import { shouldForwardProp } from './utils';

const App = () => {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <Header/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <Footer/>
    </StyleSheetManager>
  )
}

export default App
