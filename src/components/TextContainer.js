import { memo } from "react";
import "./TextContainer.css";
const TextContainer = memo(() => {
  return (
    <div className="expanded-journey-board-inner3">
      <div className="bg-layer-container">
        <div className="bg-layer6" />
        <div className="bg-layer7">
          <div className="bg-layer8" />
        </div>
        <div className="sub-interpretation-1">Sub Interpretation 1</div>
        <input className="enter-text-here2" value='Enter Text here'/>
      </div>
    </div>
  );
});

export default TextContainer;
