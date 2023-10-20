import { useContext } from "react";
import ProjectCard from "./ProjectCard.jsx";
import "./ProjectList.css";
import { themeContext } from "../utils/themeContext.jsx";

const ProjectList = ({ projects }) => {
  const { theme } = useContext(themeContext);

  return(
  <div className={`card ${theme === 'dark' ? 'dark-card' : 'light-card'}`}>
    <a id="projects" className="anchor-target"></a>
    <h3>Projects: </h3>
    <ul className="project-grid">
      {projects?.map((project) => <li key={project?.id}><ProjectCard project={project} /></li>)}
    </ul>
  </div>
  )
}

export default ProjectList;
