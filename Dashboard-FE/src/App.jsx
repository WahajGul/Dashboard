import { useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="w-screen">
            <Dashboard />
        </div>
    );
}

export default App;
