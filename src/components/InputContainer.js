import { memo } from "react";
import "./InputContainer.css";
const InputContainer = memo(() => {
  return (
    <div className="expanded-journey-board-inner1">
      <div className="bg-layer-parent">
        <div className="bg-layer" />
        <div className="bg-layer1">
          <div className="bg-layer2" />
        </div>
        <div className="summary-for-thread">Summary for Thread A</div>
        <input className="enter-text-here" value='Enter Text Here'/>
      </div>
    </div>
  );
});

export default InputContainer;
