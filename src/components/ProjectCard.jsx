import IconParser from "./IconParser";
import { getUrl } from "../utils/functions";
import "./ProjectCard.css";

const ProjectCard = ({ project: { name, tools, description, image, githubLink, siteLink }}) => {
  const asset = getUrl(`../assets/images/${image}.png`);

  return(
    <div className="project-card">
      <h3>{name}</h3>
      <p>Tools: </p>
      <ul className="icon-list">
        {tools?.map((tool) => <li className="icon-item" key={tool.id}><IconParser label={tool} />{tool}</li>)}
      </ul>
      <p>{description}</p>
      <ul className="icon-list">
        <li><a href={githubLink} target="_blank" className="icon-item"><IconParser label={'github'} />github</a></li>
        <li><a href={siteLink} target="_blank" className="icon-item"><IconParser label={'site'} />site</a></li>
      </ul>
      <p>preview: </p>
      <img src={asset} alt={`${name}`} />
    </div>
  )
}

export default ProjectCard;
