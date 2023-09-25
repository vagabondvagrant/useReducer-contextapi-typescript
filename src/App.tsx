import "./styles.css";
import { ThemeConsumer } from "./ThemeConsumer";
import { ThemeProvider } from "./UseContext";
export default function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    </>
  );
}
