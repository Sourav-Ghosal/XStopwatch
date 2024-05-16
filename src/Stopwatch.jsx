import { useState,useEffect } from "react"
export default function Stopwatch(){
    const[time,setTime]=useState(0);
    const[timerOn,setTimerOn]=useState(false);
    const handleStart=()=>{
        setTimerOn(prev=>!prev);
    }
    const formatTime=(seconds)=>{
        const minute=Math.floor(seconds/60);
        const remain=seconds%60;
        return `${minute}:${remain<10?'0':''}${remain}`
    }

    const handleReset=()=>{
        setTime(0);
        setTimerOn(false);
    }
    useEffect(()=>{
        let mytimer;
        if(timerOn){
            mytimer=setInterval(()=>{
                setTime((prev)=>prev+1);
            },1000)
        }
        else{
            clearInterval(mytimer);
        }
        return ()=>clearInterval(mytimer)
    },[timerOn])


    return(
        <div>
            <h1>Stopwatch</h1>
            <p>Time:{formatTime(time)}</p>
            <div>
                <button onClick={handleStart}>{timerOn ? 'Stop':"Start"}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}