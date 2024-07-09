import React, { useState } from 'react'
import './Calc.css'
import {evaluate} from 'mathjs'

const Calc = () => {
    const [res, setRes] = useState('');

    const [dark, setDark] = useState(false);

    const removeLastNumber = () =>{
        const newRes = res.substring(0, res.length-1)
        setRes(newRes);
    }

    const getResult = () =>{
        if(res !== "")
        {
            const finalRes = evaluate(res);
            setRes("" + finalRes);
        }
    }

    const darkToggle = () =>{
        setDark(!dark);
    }


  return (
    <div className={`main ${dark? 'dark_mode_active' : ""}`}>
        <div className="display">
            <button className="dark_mode_btn" onClick={darkToggle}>
                {dark ? <i class="fa fa-sun-o" aria-hidden="true"></i>:<i className="fa fa-moon-o" aria-hidden="true"></i>}
            </button>
            {/* <p id="history"><i className="fa fa-history" aria-hidden="true"></i> History</p> */}
            <h2 id="result">{res}</h2>
        </div>
        <div className="buttons"> 
            <button id="clear" onClick={()=>{setRes('')}}>C</button>
            <button id="delete_single_num" onClick={removeLastNumber}><i className="fa fa-scissors" aria-hidden="true"></i></button>
            <button id="Normal_btn" onClick={()=>{setRes(res + "/")}}>/</button> 
            <button id="Normal_btn" onClick={()=>{setRes(res + "*")}}>*</button> 
        </div>
        <div className="buttons"> 
            <button id="Normal_btn" onClick={()=>{setRes(res + "7")}}>7</button> 
            <button id="Normal_btn" onClick={()=>{setRes(res + "8")}}>8</button>
            <button id="Normal_btn" onClick={()=>{setRes(res + "9")}}>9</button> 
            <button id="Normal_btn" onClick={()=>{setRes(res + "-")}}>-</button> 
        </div>
        <div className="buttons"> 
            <button id="Normal_btn" onClick={()=>{setRes(res + "4")}}>4</button> 
            <button id="Normal_btn" onClick={()=>{setRes(res + "5")}}>5</button>
            <button id="Normal_btn" onClick={()=>{setRes(res + "6")}}>6</button> 
            <button id="Normal_btn" onClick={()=>{setRes(res + "+")}}>+</button> 
        </div>
        <div className="buttons"> 
            <button id="Normal_btn" onClick={()=>{setRes(res + "1")}}>1</button> 
            <button id="Normal_btn" onClick={()=>{setRes(res + "2")}}>2</button>
            <button id="Normal_btn" onClick={()=>{setRes(res + "3")}}>3</button> 
            <button id="Normal_btn" onClick={()=>{setRes(res + ".")}}>.</button> 
        </div>
        <div className="buttons"> 
            <button id="Normal_btn" onClick={()=>{setRes(res + "0")}}>0</button> 
            <button id="Normal_btn" onClick={()=>{setRes(res + "00")}}>00</button>
            <button id="equalTo" onClick={getResult}>=</button>
        </div>
    </div>
  )
}

export default Calc
