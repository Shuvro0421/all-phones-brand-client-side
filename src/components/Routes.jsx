import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Routes = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Routes;