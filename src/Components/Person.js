import React from "react"

export default function Person (props) {
    return (
        <div>  
            <button 
                onClick={() => props.handleChangeIndex(props.index)} 
                className="previous"
            >
                Previous
            </button>
            <button
                onClick={() => props.handleChangeIndex(props.index)}
                className="next"
            >
                Next
            </button>
        </div>
    )
}