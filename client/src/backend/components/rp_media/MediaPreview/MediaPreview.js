import React from 'react'
import namiIMG from "../../../../includes/img/png/characters/nami/nami.png"
import luffyIMG from "../../../../includes/img/png/characters/luffy/luffy.png"
import robinIMG from "../../../../includes/img/png/characters/nico_robin/nico_robin_1.png"

function MediaPreview() {

    const testImageArray =[
        {
            title: "bild",
            src:namiIMG
        },
        {
            title: "bild",
            src:luffyIMG
        },
        {
            title: "bild",
            src:robinIMG
        },
        {
            title: "bild",
            src:namiIMG
        },
        {
            title: "bild",
            src:robinIMG
        },
        {
            title: "bild",
            src:luffyIMG
        },
        {
            title: "bild",
            src:robinIMG
        },
        {
            title: "bild",
            src:namiIMG
        },
        {
            title: "bild",
            src:robinIMG
        },
        {
            title: "bild",
            src:luffyIMG
        },
        {
            title: "bild",
            src:robinIMG
        },

    ]

    return (
        <section id="rp-media-Preview">
            <div className=' bg-slate-100 p-4 min-h-[750px] '>
                <h2 className='font-bold text-2xl mb-4 underline'>Ihre Bilder Vorschau</h2>
                <div className='grid grid-cols-10 gap-4'>
                    {testImageArray.map(({title,src},index)=>
                        <div className='bg-slate-300 col-span-2 rounded-md  cursor-pointer hover-prev h-52 bg-contain bg-no-repeat bg-center' key={index} style={{backgroundImage:`url(${src})`}}>
                            <h2 className='p-4 font-bold'>{title}</h2>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default MediaPreview