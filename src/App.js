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


  
        <StepMessage step={step}>
  {messages[step - 1]}
</StepMessage>
     
      <Button onClick={handlePrevious}>
  Previous
</Button>

<Button onClick={handleNext}>
  Next
</Button>
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
function Button({ children, onClick }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}