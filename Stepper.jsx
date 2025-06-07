import React from "react";
import "../assets/style/Stepper.css";

const Stepper = ({ activeStep = 1 }) => {
  const steps = [1, 2, 3, 4, 5];

  return (
    <div className="stepper-container">
      
      <div className="steps">
        {steps.map((step, index) => {
          const isActive = activeStep === step;
          const isCompleted = step < activeStep;

          return (
            <div
              key={index}
              className={`step ${isActive ? "active" : ""} ${
                isCompleted ? "completed" : ""
              }`}
            >
              <div className="circle">{step}</div>
              {index < steps.length - 1 && (
                <div className={`line ${isCompleted ? "completed" : ""}`}></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
