import { getUrl } from "../utils/functions";
import "./ProjectCard.css";

const ProjectCard = ({ project: { name, tools, description, image, githubLink, siteLink }}) => {
  const asset = getUrl(`../assets/images/${image}.png`);
  return(
    <div className="project-card">
      <h3>{name}</h3>
      <ul>
        {tools?.map((tool, index) => <li key={index}>{tool}</li>)}
      </ul>
      <p>{description}</p>
      <img src={asset} alt={`${name}`} />
      <div>
        <a href={githubLink} target="_blank">github</a>
        <a href={siteLink} target="_blank">site</a>
      </div>
    </div>
  )
}

export default ProjectCard;
