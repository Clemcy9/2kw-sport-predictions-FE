import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../hooks/useAuth";
// import { isLoggedIn } from "../hooks/useAccess";

export default function ProtectedRoute({children}) {
   


    if(!isLoggedIn()) {
        return <Navigate  to="/sign-in" replace />;
    }

    return children;
}