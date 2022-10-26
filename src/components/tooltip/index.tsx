import React, { useState } from "react";
import "./Tooltip.css";
import { ToolTipProps } from "../../types/index";

const Tooltip: React.FC<ToolTipProps> = ({ content, children }) => {
  let timeout: any;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <span
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseOver={showTip}
      onMouseOut={hideTip}
    >
      {/* Wrapping */}
      {children}
      {active && (
        <div className="Tooltip-Tip">
          {/* Content */}
          <h4 className="header">{content.header}</h4>

          <p className="title">{content.title}</p>
          <p className="trait">{content.trait}</p>
        </div>
      )}
    </span>
  );
};

export default Tooltip;
