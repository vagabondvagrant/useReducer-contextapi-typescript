import { createContext, useReducer } from "react";

type Initialize = {
  theme: string;
  fontSize: number;
};

type State = {
  theme: string;
  fontSize: number;
};

type Action = {
  type: "ChangeTheme" | "ChangeFontSize";
  payload?: string | number;
};

export const ThemeContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: { theme: "", fontSize: 16 },
  dispatch: () => {}
});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ChangeFontSize":
      return {
        ...state,
        fontSize:
          typeof action.payload === "number" ? action.payload : state.fontSize
      };
    case "ChangeTheme":
      return {
        ...state,
        theme: typeof action.payload === "string" ? action.payload : state.theme
      };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: Initialize = {
    theme: "initialTheme",
    fontSize: 16
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
