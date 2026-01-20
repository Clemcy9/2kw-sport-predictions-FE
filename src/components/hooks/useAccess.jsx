import { Navigate } from "react-router-dom";
import { isLoggedIn, hasAccount } from "./useAuth";


export default function AccessRoutes ({children}) {
    if(isLoggedIn()) {
        return <Navigate to="/auth/2kw-admin-2026/dashboard" replace />;
    }

    
    if(hasAccount()) {
        return <Navigate to="/auth/2kw-signin/admin/dashboard/2026" replace/>;
    }

    return children;
}