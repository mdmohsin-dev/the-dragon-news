import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router";

const PrivetRoute = ({ children }) => {

    const { user,loading } = useContext(AuthContext)

    if(loading){
        return <h1 className="text-7xl pt-32 text-center">Loading.....</h1>
    }

    if (!user) {
        return <Navigate to="/login"></Navigate>
    }

    return children
};

export default PrivetRoute;