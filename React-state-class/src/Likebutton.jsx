import {useState} from "react"
export default function LikeButton ()  {
    let [isLiked,setIsLiked] = useState(false);
    const clickLike = () =>{
        console.log("Like is clicked" , isLiked)
        setIsLiked (!(isLiked));
     
    }
    return <div>
        <p onClick={clickLike}>{isLiked === false ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart"></i>  }</p>
    </div>
}