import { useContext } from "react";
import { themeContext } from "../utils/themeContext";
import IconParser from "./IconParser";
import ToolTipItem from "./ToolTipItem";
import { getUrl } from "../utils/functions";
import "./ProjectCard.css";

const ProjectCard = ({ project: { name, tools, description, image, githubLink, siteLink }}) => {
  const { theme } = useContext(themeContext);
  const asset = getUrl(`../assets/images/${image}.png`);

  return(
    <div className={`project-card ${theme === 'dark' ? 'dark-pro-card' : 'light-pro-card'}`}>
      <h3>{name}</h3>
      <article className="pro-card-article">
        <h4>Tools: </h4>
        <ul className="icon-list">
          {tools?.map((tool, index) => <li className="icon-item" key={index}><ToolTipItem label={tool}><IconParser label={tool.toLowerCase()} /></ToolTipItem></li>)}
        </ul>
      </article>
      <article className="pro-card-article">
        <h4>Preview: </h4>
        <a href={siteLink} target="_blank">
          <img src={asset} alt={`${name}`} />
        </a>
      </article>
      <article className="pro-card-article">
        <h4>About: </h4>
        <p>{description}</p>
      </article>
      <article className="pro-card-article">
        <h4>Check it out!</h4>
        <ul className="icon-list">
          <li><a href={githubLink} target="_blank" className="icon-item"><ToolTipItem label={"GitHub"}><IconParser label={'github'} /></ToolTipItem></a></li>
          <li><a href={siteLink} target="_blank" className="icon-item"><ToolTipItem label={"Deployed Site"}><IconParser label={'site'} /></ToolTipItem></a></li>
        </ul>
      </article>
    </div>
  )
}

export default ProjectCard;
