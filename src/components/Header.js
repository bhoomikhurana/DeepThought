import { memo } from "react";
import "./Header.css";
const Header = memo(({ productIds }) => {
  return (
    <div className="rectangle-parent5">
      <div className="group-child14" />
      <img className="ellipse-icon" alt="" src="/ellipse-53@2x.png" />
      <div className="group-child15" />
      <div className="group-child16" />
      <div className="group-child17" />
      <div className="group-child18" />
      <img className="vector-icon12" alt="" src="/vector.svg" />
      <div className="group-child19" />
      <img className="logo-1-icon" alt="" src={productIds} />
      <div className="group-parent">
        <img className="group-child20" alt="" src="/group-1098.svg" />
        <img className="tools2" src="/Group 1100.png"/>
         
      </div>
      <div className="ellipse-parent6">
        <img className="group-child21" src="/Group 1097.png"/>
      </div>
    </div>
  );
});

export default Header;
