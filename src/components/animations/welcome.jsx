import CinematicBouncyText from "./text";
import { isLoggedIn, justLoggedIn, logInEmail } from "../hooks/useAuth";

export default function Text() {

    const loggedIn = isLoggedIn();
    const newLogin = justLoggedIn();
    const welcome = logInEmail();

    const name = welcome.split("@")[0];

    if (!loggedIn || !welcome) return null;

    if (newLogin) {
    sessionStorage.removeItem("justLoggedIn");
  }


    
    return(
        <div className="flex justify-center text-shadow-xl min-h-screen">
             <CinematicBouncyText text={newLogin ? `Welcome ${name }` : `Welcome Back ${name}`} />
        </div>
    );
}