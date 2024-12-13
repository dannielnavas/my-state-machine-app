import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StateMachineWizard } from "./StateMachineWizard.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StateMachineWizard />
  </StrictMode>
);
