import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";


const Root = () => {
    return (
        <div className="xl:max-w-7xl lg:max-w-4xl md:max-w-2xl px-4 md:px-0 mx-auto font-poppins ">

            <Outlet></Outlet>
            
            <Footer></Footer>
            
        </div>
    );
};

export default Root;