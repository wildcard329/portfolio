import { useContext } from "react";
import { themeContext } from "../utils/themeContext";
import "./Profile.css";

const Profile = () => {
  const { theme } = useContext(themeContext);

  return(
    <div className={`profile ${theme === 'dark' ? 'dark-profile' : 'light-profile'}`}>
      <a id="about" className="anchor-target"></a>
      <h1 className="profile-title">Hi, My Name Is Adam.</h1>
      <p className="profile-about">I am a front end developer who specializes in JavaScript frameworks. I have experience working in AWS and am currently learning C# so I can branch out to .net development. Feel free to <span><a href="#social">say hi</a></span>.</p>
    </div>
  )
}

export default Profile;
