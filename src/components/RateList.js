import React from "react"
import { useSelector } from "react-redux"


const RatesList = () => {
    const ratesList = useSelector(state => state.rates.ratesList)

    return (
        <ul>
            {ratesList?.map(rate => (
                <li key={rate.user}>
                    {rate.user} {rate.rate} {rate.comment}
                </li>
            ))}
        </ul>
    )
}

export default RatesList