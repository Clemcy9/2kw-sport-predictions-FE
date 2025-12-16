import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}) {
    const isLOggedIn = localStorage.getItem("isLogged in");


    if(!isLOggedIn) {
        return <Navigate  to="/sign-in" replace />;
    }

    return children;
}