import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
import "quill/dist/quill.snow.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
