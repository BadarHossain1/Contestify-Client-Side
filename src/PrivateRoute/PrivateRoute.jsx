import { useContext } from "react";
import { AuthContext } from "../ContextProvider/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div><div className="w-full gap-x-2 flex justify-center items-center">
            <div
                className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full animate-bounce"
            ></div>
            <div
                className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full animate-bounce"
            ></div>
            <div
                className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full animate-bounce"
            ></div>
        </div>
        </div>
    }
    if (!user) {


        return <Navigate to='/login' state={location?.pathname || '/'} replace />


    }

    return (
        <>
            {children}
        </>
    );
};

export default PrivateRoute;