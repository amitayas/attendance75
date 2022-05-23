import './AttendanceCalculator.css';

import { useState } from "react";

export const AttendanceCalculator = () => {
    //const outputValue = "";
    const [presentValue, changePresentValue] = useState("");
    const [totalValue, changeTotalValue] = useState("");
    const [outputValue, changeOutputValue] = useState("");

    const calculate = () => {
        
        if(isNaN(presentValue) || isNaN(totalValue)){
            changeOutputValue("Illegal Input");
            return 0;
        }
        
        const percentage = (presentValue/totalValue)*100;
        if(percentage>75){
            const bunk = parseInt(100*presentValue/75 - totalValue);
            changeOutputValue(`You can bunk upto ${bunk} classes`);
        }
        else if(percentage<75){
            const days = 3*parseInt(totalValue) - 4*parseInt(presentValue);
            changeOutputValue(`You need to attend atleast ${days} more classes to reach 75%`)
        }
        else{
            changeOutputValue("You have exactly 75% attendance")
        }
    }
    
    return (
        
        <div className='wrapper'>
            <div className="present">
                <div>Classes Attended : </div>
                <input type="text" className='inputfield' onChange={(e) => {changePresentValue(e.target.value)}} />
            </div>
            <div className="total">
                <div>Total Number of Classes : </div>
                <input type="text" className='inputfield' onChange={(e) => {changeTotalValue(e.target.value)}}/>
            </div>
            <button id="calculateButton" onClick={calculate}>Go!!</button>
            <div className="output">
                {outputValue}
            </div>
        </div>
        
    );
}