import React, { useState } from "react";

interface StateMachineConfig<StateType, StepNames extends string> {
  initialStep: StepNames;
  steps: {
    [key in StepNames]: {
      canAdvance: (state: StateType) => boolean;
    };
  };
  views: {
    [key in StepNames]: React.ComponentType<{
      state: StateType;
      setState: React.Dispatch<React.SetStateAction<StateType>>;
    }>;
  };
}
type WizardState = {
  name: string;
  age: number;
};
type StepNames = "step1" | "step2" | "confirmation";

const stateMachineConfig: StateMachineConfig<WizardState, StepNames> = {
  initialStep: "step1",
  steps: {
    step1: {
      canAdvance: (state) => !!state.name,
    },
    step2: {
      canAdvance: (state) => !!state.age,
    },
    confirmation: {
      canAdvance: () => true,
    },
  },
  views: {
    step1: ({ state, setState }) => (
      <div>
        <input
          type="text"
          value={state.name}
          onChange={(e) => setState((prev) => ({ ...prev, name: e.target.value }))}
          placeholder="full name"
        />
      </div>
    ),
    step2: ({ state, setState }) => (
      <div>
        <input
          type="number"
          value={state.age}
          onChange={(e) =>
            setState((prev) => ({ ...prev, age: parseInt(e.target.value) }))
          }
          placeholder="full name"
        />
      </div>
    ),
    confirmation: ({ state }) => (
      <div>
        <p>
          {state.name} is {state.age} years old
        </p>
      </div>
    ),
  },
};

function App() {
  const [count, setCount] = useState(0);

  return <></>;
}

export default App;
