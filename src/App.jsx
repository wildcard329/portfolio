import './App.css'
import PROJECTS from "./assets/configs/projects.json";
import ProjectList from './components/ProjectList';

const App = () => 
  <div className="container">
    <ProjectList projects={PROJECTS} />
  </div>

export default App
