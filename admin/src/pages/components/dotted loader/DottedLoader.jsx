import React from 'react'
import "./dottedloader.css"

const DottedLoader = () => {
    return (
        <>
            <div className="w-full h-full flex justify-center items-center">
                <div className="dot-spinner">
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                </div>
            </div>

        </>
    )
}

export default DottedLoader
