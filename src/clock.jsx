import { useState, useEffect } from "react";
import React from "react";

function Clock () {

const [date, setDate] = useState(new Date());

useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000)

    return function cleanup() {
        clearInterval(timer)
    }
});

    return (
        <div>
            <h3 className="date">{date.toDateString()}</h3>
        <div className="border">
            <div className="inner-border">
            <p className="time">{date.toLocaleTimeString()}</p>
            </div>
        </div>
        </div>
    )
}

export default Clock;