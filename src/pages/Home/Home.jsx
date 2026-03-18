import Navbar from "../../components/Navbar/Navbar";
import LeftSide from "../../components/LeftSide/LeftSide";
import { Outlet } from "react-router";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className="flex gap-10 items-start mt-10">
                <div className="w-1/3 sticky top-4 max-h-screen overflow-y-auto">
                    <LeftSide></LeftSide>
                </div>
                <div className="w-2/3">
                    
                    <Outlet></Outlet>
                </div>
            </section>
        </div>
    );
};

export default Home;