import ProjectCard from "./ProjectCard.jsx";
import "./ProjectList.css";

const ProjectList = ({ projects }) => 
  <ul className="project-grid">
    {projects?.map((project) => <li key={project?.id}><ProjectCard project={project} /></li>)}
  </ul>

export default ProjectList;
