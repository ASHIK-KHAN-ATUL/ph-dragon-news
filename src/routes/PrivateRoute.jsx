import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <LoadingPage></LoadingPage>
    }

    if(user && user?.email){
        return children;
    }

    return (
        <Navigate to={'/auth/login'} ></Navigate>
    );
};

export default PrivateRoute;