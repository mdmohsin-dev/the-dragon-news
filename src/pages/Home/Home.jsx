import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import LeftSide from "../../components/LeftSide/LeftSide";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className="flex gap-8 items-start mt-10">
                <div className="w-1/4">
                    <LeftSide></LeftSide>
                </div>
                <div className="w-2/4">
                    <h3 className="text-[#403F3F] text-xl font-semibold">Dragon News Home</h3>
                    <Outlet></Outlet>
                </div>
                <div className="w-1/4">
                    <h3 className="text-[#403F3F] text-xl font-semibold">Find Us On</h3>
                </div>
            </section>
        </div>
    );
};

export default Home;