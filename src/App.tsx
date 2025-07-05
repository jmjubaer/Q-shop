import { Outlet } from "react-router-dom";
import Navbar from "./components/shered/Navbar";

const App = () => {
    return (
        <div className="bg-gray-50">
            <Navbar />
            <div className='min-h-screen'>
                <Outlet />
            </div>
        </div>
    );
};

export default App;
