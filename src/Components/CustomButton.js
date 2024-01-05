import React from 'react'

const CustomButton = ({ type = "submit", text = "Submit", isFullWidth = false, ...rest }) => {
    return (
        <button type={type} className={`btn btn-primary ${isFullWidth ? "w-100" : ""}`} {...rest}>{text}</button>
    )
}

export default CustomButton