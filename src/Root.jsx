import { useState } from "react";
import App from "./App";
import InitialLoader from "./components/InitialLoader";
import { ThemeProvider } from "./context/ThemeContext";

export default function Root() {
  const [ready, setReady] = useState(false);

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

