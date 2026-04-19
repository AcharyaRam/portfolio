import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import InitialLoader from "./components/InitialLoader";
import { ThemeProvider } from "./context/ThemeContext";

export default function Root() {
  const [ready, setReady] = useState(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <InitialLoader minDurationMs={700} onReady={() => setReady(true)} />
        <div
          className={[
            "min-h-screen",
            "transition-opacity duration-500 ease-out",
            ready ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          <App />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
