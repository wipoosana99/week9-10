import React from 'react'

const Footer = ({name,college,address}) => {
    return (
        <div>
            <div className="text-center">Design : {name}</div>
            <div className="text-center">&copy; 2021 Copyright {college} {address}</div>
        </div>
    )
}

export default Footer
