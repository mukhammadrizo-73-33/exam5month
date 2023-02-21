import React from "react";
import { FcPrevious } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
function NotFound(){
    const navigate = useNavigate();
    function back() {
        navigate(-1)
    }
    return <div>
        <span className="goback status" onClick={back}><FcPrevious/>Go Back</span>
        <h2>404</h2>
        <h3>Not Found</h3>
    </div>
}
export default NotFound