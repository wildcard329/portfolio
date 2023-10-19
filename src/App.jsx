import './App.css'
import PROJECTS from "./assets/configs/projects.json";
import Header from './components/Header';
import ProjectList from './components/ProjectList';

const App = () => 
  <div>
    <Header />
    <section id="about">

    </section>
    <section id="projects">
      <ProjectList projects={PROJECTS} />
    </section>
    <section id="contact">
      
    </section>
  </div>

export default App
