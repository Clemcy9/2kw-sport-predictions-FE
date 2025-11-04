import CinematicBouncyText from "./text";

export default function WelcomeText() {
    const welcome = localStorage.getItem("name");

    return(
        <div className="hidden sm:flex sm:items-center sm:justify-center min-h-screen text-shadow-xl ">
            <CinematicBouncyText text={`Welcome ${welcome}`} />
        </div>
    )
}