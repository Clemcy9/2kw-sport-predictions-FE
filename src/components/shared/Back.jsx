import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"

export default function GoBack () {

    const back = useNavigate();

    return(
        <div>
            <button onClick={() => back(-1)} className="text-gray-700 ">
                <FaArrowLeft size={26} />``
            </button>
        </div>
    )
}