import React, { useEffect, useRef, useState } from 'react'

const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    const timerRef = useRef<null | number>(null);
    const stopTimer = () => {
        if(timerRef.current) window.clearInterval(timerRef.current)
    }
    useEffect(() => {
        timerRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        },1000)
        return () => {
            stopTimer()
        }
    },[])
    return (
        <>
        <h3>MutableRef</h3>
        <h5>Hook Timer - {timer}</h5>
        <button onClick={() => stopTimer()}>Stop Timer</button>
        </>
    )
}

export default MutableRef