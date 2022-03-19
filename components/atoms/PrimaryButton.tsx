import React from 'react'

const PrimaryButton = ({ children }: any) => {
    return (
        <React.Fragment>
            <button className="submit button">{children}</button>
        </React.Fragment>
    )
}

export default PrimaryButton