import "./App.css";
import * as React from "react";
import { Steppers } from "@cnx-grp/common-ui-lib";

function App() {
  // PROP 1
  const steps = [
    {
      // Stepper Labels
      label: "Step 0",
      // Stepper Section Click Handler
      handleClick: () => {
        if (activeStep > 0) {
          setActiveStep(0);
        }
      },
    },
    {
      label: "Step 1",
      handleClick: () => {
        if (activeStep > 1) {
          setActiveStep(1);
        }
      },
    },
    {
      label: "Step 2",
      handleClick: () => {
        if (activeStep > 2) {
          setActiveStep(2);
        }
      },
    },
  ];

  // PROP 2
  // Pass Active Step
  const [activeStep, setActiveStep] = React.useState(2);
  return <Steppers steps={steps} activeStep={activeStep} />;
}

export default App;
