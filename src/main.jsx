import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import "./index.css";
import TaskManagerProvider from "./context/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TaskManagerProvider>
      <App />
      <Toaster />
    </TaskManagerProvider>
  </BrowserRouter>
);
