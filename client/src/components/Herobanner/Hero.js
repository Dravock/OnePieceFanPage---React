import React from 'react'


function Hero(props) {
    const { imgSRC,text,space,height } = props

    const imgSRC2 = "https://www.tributemedia.com/hubfs/Images/Blog%20Images/shutterstock_252081805.jpg"

return (
    <main>
        <div id="HeroBanner" className={space}>
            <div style={{backgroundImage:`url(${imgSRC})`,height:`${height}`}} className="relative hero-banner h-[450px] bg-cover bg-no-repeat bg-center">
                <div className='absolute bottom-5 sm:bottom-10 bg-black/80 w-fit  ml-4 px-4'>
                    <h2 className='text-xs sm:text-xl font-bold text-white'>{text}</h2>
                </div>
            </div>
        </div>
    </main>
)}

export default Hero