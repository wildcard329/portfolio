import "./ToolTipItem.css";

const ToolTipItem = ({ children, label }) => 
  <div className="tooltip">
    {children}
    <span className="tooltip-text">{label}</span>
  </div>

export default ToolTipItem;
