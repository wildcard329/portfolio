import { useState } from "react";
import IconParser from "./IconParser";
import ToolTipItem from "./ToolTipItem.jsx";
import "./Skills.css";
import { useContext } from "react";
import { themeContext } from "../utils/themeContext";

const Skills = ({ skills }) => {
  const [skillsList, setSkillsList] = useState(skills);
  const { theme } = useContext(themeContext);

  const handleFilter = (category) => {
    switch (category) {
      case 'all':
        setSkillsList(skills);
        break;
      case 'frontend':
        const frontendList = skills?.filter((skill) => skill.type === 'frontend');
        setSkillsList(frontendList);
        break;
      case 'backend':
        const backendList = skills?.filter((skill) => skill.type === 'backend');
        setSkillsList(backendList);
        break;
      case 'other':
        const otherList = skills?.filter((skill) => skill.type !== 'frontend' && skill.type !== 'backend');
        setSkillsList(otherList);
        break;
      default: setSkillsList(skills);
    };
  };

  return(
    <div className={`card ${theme === 'dark' ? 'dark-card' : 'light-card'}`}>
      <a id="skills" className="anchor-target"></a>
      <h3>Skills:</h3>
      <ul className="categories-list">
        <li><button onClick={() => handleFilter('all')} className={theme === 'dark' ? 'dark-btn' : 'light-btn'}>all</button></li>
        <li><button onClick={() => handleFilter('frontend')} className={theme === 'dark' ? 'dark-btn' : 'light-btn'}>front end</button></li>
        <li><button onClick={() => handleFilter('backend')} className={theme === 'dark' ? 'dark-btn' : 'light-btn'}>back end</button></li>
        <li><button onClick={() => handleFilter('other')} className={theme === 'dark' ? 'dark-btn' : 'light-btn'}>other</button></li>
      </ul>
      <ul className="skills-list">
        {skillsList?.map((skill) => <li key={skill.id} className="icon-item"><ToolTipItem label={skill.name}><IconParser label={skill.name.toLowerCase()} /></ToolTipItem></li>)}
      </ul>
    </div>
  )
}

export default Skills;
