import { format } from "date-fns";
import navImg from "../../assets/logo.png"
const Header = () => {
    return (
            <div className="flex flex-col items-center justify-center pt-4">
                <img src={navImg} alt="" />
                <p className="text-lg text-accent pt-3">Journalism Without Fear or Favour</p>
                <p className="pt-3 text-accent">{format(new Date(), "EEEE, MMMM dd yyyy")}</p>
            

        </div>
    );
};

export default Header;