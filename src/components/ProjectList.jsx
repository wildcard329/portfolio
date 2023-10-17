import ProjectCard from "./ProjectCard.jsx";

const ProjectList = ({ projects }) => 
  <div className="project-grid">
    {projects?.map((project) => <ProjectCard key={project?.id} project={project} />)}
  </div>

export default ProjectList;
