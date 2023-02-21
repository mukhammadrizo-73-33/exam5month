import React from "react";
import { FcPrevious } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
function NewInvoice(){
    const navigate = useNavigate();
    function back() {
        navigate('/invoices')
    }
    return <div>
<span className="goback status" onClick={back}><FcPrevious />Go Back</span>
        New Invoice
    </div>
}
export default NewInvoice