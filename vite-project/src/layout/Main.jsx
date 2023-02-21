import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlusSquare, FaChevronDown } from 'react-icons/fa';
import Invoice from "../components/invoices/index.jsx";
import Button from "../utilits/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInvoices } from "../store/invoices.slice";
const Main = ({datainvoices}) => {
    console.log(datainvoices,"datainvoices");
    let token= localStorage.getItem("accessToken")
    const invoices=useSelector(state=>state.invoices)
    console.log( invoices.invoices,'invoices')
    let arry= (invoices.invoices)? invoices.invoices:[];
    const [data, setData] = useState(invoices.invoices);

    const dispatch = useDispatch()
  useEffect(() => {
    dispatch( getInvoices())
  }, [])
    const location = useLocation();
    const navigate = useNavigate();
    
    const params = new URLSearchParams(location.search);
    const paid = params.get('paid');
    console.log(paid, "paid",location.search);

    const [filter, setFilter] = useState(true);
    function ChangeFilter(e) {
        console.log(e, e.target.value, location.search, "location search", paid, "kkkk")
        let ispaid = (e.target.value ==='Paid');
        if(!(e.target.value=="Paid" || e.target.value=="UnPaid")){
            ispaid=''
        }

        console.log(e.target.value,"value",ispaid);
        setFilter(ispaid)
        console.log(filter, "selectchange")
        let filter_name = (e.target.value == 'Paid' || e.target.value == "UnPaid") ? `?paid=${ispaid}` : "";
        navigate({
            search: filter_name
        })
       
    }
    useEffect(() => {
        axios.get("http://167.235.158.238:3001/invoices", {
            params: {
                paid
            }
        }).then((res) => {
            console.log(res.data,paid,'sss',location.search);
            setData(res.data)

        })
        
    }, [paid])
    function newinvoices() {
        if (!token) {
            navigate("/login");
            console.log("addinvoisesese");
        }
        else {
            navigate('/newinvoice')
        }
    }
    
    return <div className="invoice">
        <h1 className="korinmas"></h1>
        <div className="invoiceTitle">
            <div className="title"> <h2>Invoices</h2> <p className="paragraph">There are <span>{data.length}</span> total invoices</p></div>
            <div className="invoiceTitle__panelFilter">
                <select className="selectPaid statusSpan"  onChange={ChangeFilter}>
                    <option name='aaa'> Filter <span className="mobile--none"></span> </option>
                    <option name='All'> All </option>
                    <option name='Paid'> Paid </option>
                    <option name='UnPaid'> UnPaid </option>
                </select>
                <Button onClick={newinvoices}><span className="plus" > <FaPlusSquare /></span>New <span className="mobile--none"> Invoice</span></Button>
            </div>
        </div>
        {
            data.map((item, index) => {
                return <Invoice voices={item} key={index}></Invoice>
            })
        }
    </div>
}
export default Main