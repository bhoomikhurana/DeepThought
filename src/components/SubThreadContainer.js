import { memo } from "react";
import "./SubThreadContainer.css";
const SubThreadContainer = memo(() => {
  return (
    <div className="expanded-journey-board-inner2">
      <div className="bg-layer-group">
        <div className="bg-layer3" />
        <div className="bg-layer4">
          <div className="bg-layer5" />
        </div>
        {/* <input value='Enter Text here'/> */}
        <input className="enter-text-here1" value='Enter Text here'/>

        <div className="sub-thread-1">Sub thread 1</div>
      </div>
    </div>
  );
});

export default SubThreadContainer;
