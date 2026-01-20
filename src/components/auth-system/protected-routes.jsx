import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../hooks/useAuth";
import useAuthRoutes from "../hooks/useAuthRoutes";
// import { isLoggedIn } from "../hooks/useAccess";

export default function ProtectedRoute({children}) {
   
const { signIn } = useAuthRoutes();

    if(!isLoggedIn()) {
        return <Navigate  to={signIn} replace />;
    }

    return children;
}