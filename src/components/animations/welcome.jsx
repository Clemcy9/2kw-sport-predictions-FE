import CinematicBouncyText from "./text";

export default function Text() {
    const welcome = localStorage.getItem(("name"));
    //.trim().split(" ")
    return(
        <div className="flex justify-center text-shadow-xl min-h-screen">
            <CinematicBouncyText text={`Welcome ${(welcome)}`} />
        </div>
    )
}