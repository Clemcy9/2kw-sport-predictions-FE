import CinematicBouncyText from "./text";

export default function WelcomeText() {
    const welcome = localStorage.getItem(("name"));

    return(
        <div className="flex justify-center text-shadow-xl min-h-screen">
            <CinematicBouncyText text={`Welcome  ${(welcome).trim().split(" ")}`} />
        </div>
    )
}