import React from "react";
import { useDispatch } from "react-redux";
import { removeRate } from "../features/ratesSlice";
import Form from "./Form";

const RateItem = ({id, user, rate, comment}) => {

    const [isVisibleForm, setIsVisibleForm] = React.useState(false)

    const dispatch = useDispatch()

    const toogleVlisibleForm = () => setIsVisibleForm(perv => !perv)

    return (
        <li style={{ padding: "8px" }}>
            <p>User name: {user}</p>
            <p>Rate: {rate}</p>
            <p>Comment: "{comment}"</p>
            {isVisibleForm ? (
                <Form id={id} user={user} rate={rate} comment={comment} hideForm={toogleVlisibleForm}/>
            ) : (
                <>
                    <button onClick={toogleVlisibleForm}>edit comment</button>
                    <button onClick={() => dispatch(removeRate({ id }))}>
                        delete comment
                    </button>
                </>
            )}
        </li>
    );
}

export default RateItem;