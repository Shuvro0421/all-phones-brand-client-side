import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Routes = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Header></Header>
            </header>
            <main className="flex-1">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Routes;
