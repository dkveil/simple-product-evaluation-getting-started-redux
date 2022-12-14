import React from "react";
import { useDispatch} from "react-redux";
import { addRate, editRate } from "../features/ratesSlice";
import { v4 as uuidv4 } from 'uuid'

const Form = ({id, user, rate, comment, hideForm}) => {
    const [inputValue, setInputValue] = React.useState({
        user: user ? user : "",
        rate: rate ? rate : 0,
        comment: comment ? comment : ""
    })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInputValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if(inputValue.user && inputValue.comment){
            if(id){
                dispatch(editRate({
                    id,
                    user: inputValue.user,
                    rate: inputValue.rate,
                    comment: inputValue.comment,
                }))
                hideForm();
            }
            else {
                dispatch(addRate({
                    id: uuidv4(),
                    user: inputValue.user,
                    rate: inputValue.rate,
                    comment: inputValue.comment
                }))
            }
        }
    }

    return (
        <form onSubmit={handleOnSubmit} style={{padding: "20px"}}>
            <div>
                <label htmlFor="user">
                    User:
                    <input
                        name="user"
                        type="text"
                        value={inputValue.user}
                        onChange={handleChange}
                    ></input>
                </label>
            </div>
            <div>
                <label htmlFor="rate">
                    Rate:
                    <input
                        name="rate"
                        type="number"
                        value={inputValue.rate}
                        onChange={handleChange}
                    ></input>
                </label>
            </div>
            <div>
                <label htmlFor="commment">
                    Comment:
                    <input
                        name="comment"
                        type="text"
                        value={inputValue.comment}
                        onChange={handleChange}
                    ></input>
                </label>
            </div>
            <button type="submit">
                {id ? "edit comment" : "add comment"}
            </button>
        </form>
    );
}

export default Form