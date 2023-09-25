import React, { useContext } from "react";
import { ThemeContext } from "./UseContext";

export function ThemeConsumer() {
  const { state, dispatch } = useContext(ThemeContext);

  const changeTheme = (newTheme: string) => {
    dispatch({ type: "ChangeTheme", payload: newTheme });
  };

  const changeFontSize = (newFontSize: number) => {
    dispatch({ type: "ChangeFontSize", payload: newFontSize });
  };

  return (
    <div>
      <div>
        Theme: {state.theme}
        <br />
        <button onClick={() => changeTheme("Kabeer")}>Theme 1</button>
        <button onClick={() => changeTheme("theme2")}>Theme 2</button>
      </div>
      <div>
        Font Size: {state.fontSize}
        <br />
        <button onClick={() => changeFontSize(16)}>Font Size 16</button>
        <button onClick={() => changeFontSize(18)}>Font Size 18</button>
      </div>
    </div>
  );
}
