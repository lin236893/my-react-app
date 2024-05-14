import React from "react";
import { useState } from "react";
import MySlider from "./MySlider"
import { getValue } from "@testing-library/user-event/dist/utils";


function MyRGBPanel()
{
    const [red,setRed] = useState(128);
    const [blue,setBlue] = useState(128);
    const [green, setGreen] = useState(128);

    const updateR = (value) => setRed(value);
    const updateG = (value) => setGreen(value);
    const updateB = (value) => setBlue(value);

    return (
        <>
        <div style={{
            border : "1px solid blue",
            borderRadius : "20px",
            width : "300px",
            display : "flex",
            flexDirection : "column",
            padding : "20px" ,
            justifyContent : "center",
            alignItems : "center" ,
            margin : "auto" 
        }}>
        <div style={{
            width : "200px",
            height : "100px",
            backgroundColor : `rgb(${red}, ${green},${blue})`
        }}/>
        <span>R: </span><MySlider onChange={updateR}/>
        <span>G: </span><MySlider onChange={updateG}/>
        <span>B: </span><MySlider onChange={updateB}/>
        </div>
        
        </>
    )
}

export default MyRGBPanel;