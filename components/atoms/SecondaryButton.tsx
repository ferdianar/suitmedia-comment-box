import React from 'react'

const SecondaryButton = ({ children }: any) => {
    return (
        <React.Fragment>
            <button className="reset button">{children}</button>
        </React.Fragment>
    )
}

export default SecondaryButton