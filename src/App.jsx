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
import BackgroundAnimation from './components/BackgroundAnimation';

const App = () => {
  const { theme } = useContext(themeContext);

  return(
    <div id="portfolio" className={theme}>
      <Header />
      <BackgroundAnimation />
      <section className='z-1'>
        <Profile />
      </section>
      <section className='z-1 clear'>
        <Skills skills={SKILLS} />
      </section>
      <section className='z-1'>
        <ProjectList projects={PROJECTS} />
      </section>
      <section className='z-1'>
        <Socials socials={SOCIALS} />
      </section>
      <Footer />
    </div>
  )
}


export default App
