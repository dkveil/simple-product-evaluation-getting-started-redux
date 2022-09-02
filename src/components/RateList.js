import React from "react"
import { useSelector } from "react-redux"
import RateItem from "./RateItem"

const RatesList = () => {
    const ratesList = useSelector(state => state.rates.ratesList)

    return (
        <ul>
            {ratesList?.map(rate => (
                <RateItem
                    user={rate.user}
                    rate={rate.rate}
                    comment={rate.comment}
                />
            ))}
        </ul>
    )
}

export default RatesList