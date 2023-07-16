import React from 'react'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ImageUploader() {
    return (
        <section id="rp-media-Uploader">
            <div className='flex flex-col bg-slate-100 items-center'>
                <h2 className='mt-4 mb-2  text-2xl font-bold'>Bild hochladen</h2>
                <h3 className='mb-4 text-xl'>Klicken Sie auf den Button <b>"+"</b> um Ihre Bilder vom Gerät hochzuladen. </h3>
                <button className='bg-green-600/80 hover:bg-green-700/80 rounded-xl p-2 text-white w-16 mb-4'><FontAwesomeIcon icon={faPlus} className='font-bold'/></button>
            </div>
        </section>
    )
}

export default ImageUploader