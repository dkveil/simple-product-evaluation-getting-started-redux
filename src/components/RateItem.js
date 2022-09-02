import React from "react";

const RateItem = ({user, rate, comment}) => {
    return (
        <li style={{padding: "8px"}}>
            <p>User name: {user}</p>
            <p>Rate: {rate}</p>
            <p>Comment: "{comment}"</p>
            <button>edit comment</button>
            <button>delete comment</button>
        </li>
    )
}

export default RateItem;