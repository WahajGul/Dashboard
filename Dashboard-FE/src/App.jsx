import "./App.css";
import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import Students from "./Components/Student/Students";

function App() {
    return (
        <div className="w-screen">
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route index element={<HomePage />} />
                    <Route path="Students" element={<Students />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
