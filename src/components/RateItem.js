import React from "react";
import { useDispatch } from "react-redux";
import { editRate, removeRate } from "../features/ratesSlice";

const RateItem = ({id, user, rate, comment}) => {
    const dispatch = useDispatch()

    return (
        <li style={{padding: "8px"}}>
            <p>User name: {user}</p>
            <p>Rate: {rate}</p>
            <p>Comment: "{comment}"</p>
            <button>edit comment</button>
            <button onClick={() => dispatch(removeRate({id}))}>delete comment</button>
        </li>
    )
}

export default RateItem;