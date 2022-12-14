import React, { useEffect, useState } from "react";
import "./homepagetop.css";

import mobile1 from "../../assets/mobile1.svg";

const sentences = ["Order Medicines", "Online Doctor Consultations", "Buy Healthcare Products", "In-Clinic Appointments", "Home Healthcare Services"]
const HomepageTop = (props) => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevState => (prevState + 1) % 5);
        }, 1000);
        const circle=document.getElementById("circle");
        circle.style.top="-2000px";
        return () => {
            clearInterval(interval);
        }
    }, [])
    return (
        <div className='homepage-top'>
            <h4 className='get-content'>Get HealthSy <span>{sentences[index]}</span></h4>
            <h1 className='title'>Where Healthcare is Sincerely Yours!</h1>
            <button className='btn btn-primary' data-toggle="modal" data-target=".bd-example-modal-lg">Get Notified</button>
            <img src={mobile1}  alt=""/>
            <div className="circle" id="circle"></div>            
        </div>
    )
}

export default HomepageTop;