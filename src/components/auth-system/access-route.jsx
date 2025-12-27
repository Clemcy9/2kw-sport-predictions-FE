import { Navigate } from "react-router-dom";
import { isLoggedIn, hasAccount } from "./auth";


export default function AccessRoutes ({children}) {
    if(isLoggedIn()) {
        return <Navigate to="/dashboard" replace />;
    }

    
    if(hasAccount()) {
        return <Navigate to="/sign-in" replace/>;
    }

    return children;
}