import { useState } from "react";

export default function App() {
  return (
    
    <div>
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
       <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>


  
      <p>
        Step {step}: {messages[step - 1]}
      </p>
     
      <button onClick={handlePrevious}>
        Previous
      </button>

      <button onClick={handleNext}>
        Next
      </button>
    </div>
  );
}