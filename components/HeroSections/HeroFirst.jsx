import React from 'react'

const HeroFirst = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://5.imimg.com/data5/UA/UP/WC/SELLER-44654788/namkeen-500x500.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default HeroFirst