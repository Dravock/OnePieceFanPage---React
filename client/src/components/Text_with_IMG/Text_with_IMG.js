import React from 'react'
import imgT from "../../includes/img/png/pngegg (3).png"

function Text_with_IMG(props) {
    const {headline,text,pos,space,imgSRC,altDesc}=props
    var position

    
 

const getPosition =()=>{
    if(pos==="text-left"){
        position = "order-first"
    }else{
        position = "order-last"
    }
    return position
}

/* VARIABLEN 
    space = abstand nach oben/unten
    position = text-left / text-right
    headline = Überschrift
    text = content
*/


return (
    <main id="Text-w-IMG " className={space}>
        <div className={`grid grid-cols-1 sm:grid-cols-12 bg-red-500 z-30`}>      
            <div className={`col-span-6 ${getPosition()} `}>
                <div className='grid grid-cols-12 '>
                    { headline !== undefined ? <h1 className='col-span-12 font-bold text-2xl underline pt-2 sm:pt-0  ml-5 sm:ml-0'>{headline}</h1> : <span></span>}
                    <span className='col-span-12 p-8   '>
                        <p>
                            {text}
                        </p>
                    </span>
                </div>
            </div>

            <div className={`col-span-6 `}>
                <img className='px-4 sm:px-0 md:aspect-video h-full' src={imgT }  alt={altDesc}  width={"100%"}/>
            </div>
        </div>
    </main>
)}

export default Text_with_IMG