import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard.component";
import Home from "./components/home.component";

function App() {
  return (
    <div className="flex flex-col lg:flex-row w-screen h-screen font-montserrat">
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
