import React from "react";

const Form = () => {
    const [inputValue, setInputValue] = React.useState({
        user: "",
        rate: 0,
        comment: ""
    })

    const handleChange = (e) => {
        setInputValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <form>
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
        </form>
    );
}

export default Form