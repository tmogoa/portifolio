import { Link } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-y-5 bg-gradient-to-r from-cyan-400 to-blue-800">
            <div className="text-white text-3xl">I am</div>
            <div className="font-bold text-6xl text-blue-500 font-heading bg-white p-6 rounded">
                Tony Mogoa
            </div>
            <span className="text-xs text-white font-bold uppercase">
                <Link to="/about">About me</Link>
            </span>
        </div>
    );
}

export default App;
