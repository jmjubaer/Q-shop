import { Outlet } from "react-router-dom";
import Navbar from "../../shered/Navbar";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen'>
                <Outlet />
            </div>
        </div>
    );
};

export default HomePage;
