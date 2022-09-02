import React from "react";
import { useDispatch } from "react-redux";
import { removeRate } from "../features/ratesSlice";
import Form from "./Form";

const RateItem = ({id, user, rate, comment}) => {

    const [isVisibleForm, setIsVisibleForm] = React.useState(false)

    const dispatch = useDispatch()

    return (
        <li style={{padding: "8px"}}>
            <p>User name: {user}</p>
            <p>Rate: {rate}</p>
            <p>Comment: "{comment}"</p>
            {isVisibleForm ? <Form id={id} user={user} rate={rate} comment={comment}/> : (
                <>
                    <button onClick={() => setIsVisibleForm(true)}>edit comment</button>
                    <button onClick={() => dispatch(removeRate({id}))}>delete comment</button>
                </>
            )}
        </li>
    )
}

export default RateItem;