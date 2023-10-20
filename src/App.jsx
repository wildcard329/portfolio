import { useContext } from 'react';
import './App.css'
import PROJECTS from "./assets/configs/projects.json";
import SKILLS from "./assets/configs/skills.json";
import SOCIALS from "./assets/configs/socials.json";
import Header from './components/Header';
import Profile from './components/Profile';
import ProjectList from './components/ProjectList';
import Skills from './components/Skills';
import Socials from './components/Socials';
import { themeContext } from './utils/themeContext';
import Footer from './components/Footer';

const App = () => {
  const { theme } = useContext(themeContext);

  return(
    <div id="portfolio" className={theme}>
      <Header />
      <div className={`animation-bg ${theme === 'dark' ? 'dark-animation' : 'light-animation'}`}>
        <section className='z-1 shrink-width'>
          <Profile />
        </section>
        <section className='z-1 shrink-width'>
          <Skills skills={SKILLS} />
        </section>
        <section className='z-1 shrink-width'>
          <ProjectList projects={PROJECTS} />
        </section>
        <section className='z-1 shrink-width'>
          <Socials socials={SOCIALS} />
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default App
