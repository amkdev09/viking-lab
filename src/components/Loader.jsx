import React from 'react'
import recruLogo from '../assets/png/recru.png'

const BTLoader = () => {
    return (
        <div className="vikin-loader">
            <span className="vikin-loader__ring" aria-hidden="true" />
            <figure className="vikin-loader__logo">
                <img
                    src={recruLogo}
                    alt="Loader"
                />
            </figure>
        </div>
    )
}

export default BTLoader

