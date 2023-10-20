import { useContext } from "react";
import { themeContext } from "../utils/themeContext";
import "./BackgroundAnimation.css";

const BackgroundAnimation = () => {
  const { theme } = useContext(themeContext);

  return(
    <div className="bg-screen">
      <div className="glowing">
        <span data-index="1" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="2" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="3" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
      </div>
      <div className="glowing">
        <span data-index="1" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="2" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="3" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
      </div>
      <div className="glowing">
        <span data-index="1" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>  
        <span data-index="2" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="3" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
      </div>
      <div className="glowing">
        <span data-index="1" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="2" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="3" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
      </div>
      <div className="glowing">
        <span data-index="1" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="2" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="3" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
      </div>
      <div className="glowing">
        <span data-index="1" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="2" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="3" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
      </div>
      <div className="glowing">
        <span data-index="1" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="2" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="3" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
      </div>
      <div className="glowing">
        <span data-index="1" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="2" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="3" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
      </div>
      <div className="glowing">
        <span data-index="1" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="2" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="3" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
      </div>
      <div className="glowing">
        <span data-index="1" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>  
        <span data-index="2" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="3" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
      </div>
      <div className="glowing">
        <span data-index="1" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="2" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="3" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
      </div>
      <div className="glowing">
        <span data-index="1" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="2" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="3" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
      </div>
      <div className="glowing">
        <span data-index="1" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="2" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="3" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
      </div>
      <div className="glowing">
        <span data-index="1" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="2" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
        <span data-index="3" className={theme === 'dark' ? 'light-span' : 'dark-span'}></span>
      </div>
    </div>
  )
}

export default BackgroundAnimation;
