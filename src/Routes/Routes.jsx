import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";


const Routes = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className="mt-[200px]">
                <Footer></Footer>
            </div>


        </div>
    );
};

export default Routes;