import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";

function App() {

  return (
    <BrowserRouter>
      <div className="bg-slate-200">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
