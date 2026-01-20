import { Navigate } from "react-router-dom";
import { isLoggedIn, hasAccount } from "./useAuth";
import useAdminBase from "./useAdminUrl";


export default function AccessRoutes ({children}) {

     const admin_base_url = useAdminBase();
    if(isLoggedIn()) {
        return <Navigate to="/auth/2kw-admin-2026/dashboard" replace />;
    }

    
    if(hasAccount()) {
        return <Navigate to="/auth/2kw-signin/admin/dashboard/2026" replace/>;
    }

    return children;
}