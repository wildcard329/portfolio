import IconParser from "./IconParser";
import ToolTipItem from "./ToolTipItem";
import "./Socials.css";
import { useContext } from "react";
import { themeContext } from "../utils/themeContext";

const Socials = ({ socials }) => {
  const { theme } = useContext(themeContext);

  return(
  <div className={`card ${theme === 'dark' ? 'dark-card' : 'light-card'}`}>
    <a id="social" className="anchor-target"></a>
    <h3>Social: </h3>
    <ul className="socials">
      {socials?.map((social) => <li key={social.id}><a href={social.href} target={social.type === 'site' ? '_blank' : ''}><ToolTipItem label={social.name} ><IconParser label={social.name.toLowerCase()} /></ToolTipItem></a></li>)}
    </ul>
  </div>
  )
}

export default Socials;
