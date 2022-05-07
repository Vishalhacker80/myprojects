import React from 'react'
import './FloatingDiv.css'

const FloatingDiv = ({ imag, txt, txt2 }) => {
    return (
        <div className="floatingdiv">
            <img src={imag} alt='load' />
            <span>
                {txt}
                <br />
                {txt2}
            </span>
        </div>
    )
}

export default FloatingDiv