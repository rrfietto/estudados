import { useState, useEffect } from "react";



const Timer = () => {

    const [timeElapsed, setTimeElapsed] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [storedTimeElapsed, setStoredTimeElapsed] = useState(0);


    useEffect(() => {

        //set up change every 1000 ms
        if (isRunning) {
            const intervalID = setInterval(() => {
                setTimeElapsed(Date.now() - startTime);
            }, 1000);

            return () => {
                clearInterval(intervalID);
            }
        }
    }, [startTime, isRunning]);


    // Helper function to format milliseconds into H:M:S
    const formatTime = (ms: number) => {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const toggleTimer = () => {
        if (isRunning) {
            setStoredTimeElapsed(timeElapsed + storedTimeElapsed);
            setTimeElapsed(0);
            return setIsRunning(false);
        } else
            setStartTime(Date.now());
        return setIsRunning(true);
    }

    const resetTimer = () => {
        console.log("Total time: ", formatTime(storedTimeElapsed + timeElapsed))
        setTimeElapsed(0);
        setStoredTimeElapsed(0);
        setStartTime(Date.now());
        setIsRunning(false);

    }

    return (
        <div>
            <p>Time Elapsed: {formatTime(timeElapsed + storedTimeElapsed)}</p>
            {/* A button to reset the timer */}
            <button onClick={resetTimer}>Reset Timer</button>
            <button onClick={toggleTimer}>{isRunning ? "Pause" : "Resume"}</button>
        </div>
    );
};

export default Timer;
