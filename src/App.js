import { useState } from "react";

export default function App() {
  return (
    
    
  <div className="steps">
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  // Previous function
  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  // Next function
  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
  ×
   </button>
      {isOpen && (
        <>
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
          </StepMessage>

          <Button
            bgColor="#7950f2"
            textColor="#fff"
            onClick={handlePrevious}
          >
            👈 Previous
          </Button>

          <Button
            bgColor="#7950f2"
            textColor="#fff"
            onClick={handleNext}
          >
            Next 👉
          </Button>
        </>
      )}

    </div>
  );
}


function StepMessage({ step, children }) {
  return (
    <div>
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
function Button({ textColor, bgColor, children, onClick }) {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: "none",
        padding: "10px 15px",
        margin: "5px",
        borderRadius: "20px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}