import { useState } from "react";
import { data } from "react-router-dom";


export default function NewPost () {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    

      try{
          const res = await fetch("http://localhost:5000/api/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, content }),
            });

            const data = await res.json();
            console.log("backend response", data);

            if(!res.ok){
                return;
            }

        }catch (ero) {
            console.log(ero)
        }
     };


     return(
        <div>
            <form action="">
                <input type="text" value={title} placeholder="Article Title" onChange={(e) => setTitle(e.target.value)}/>
                {/* {ReactQuil} */}

                
            </form>
        </div>
     )
}