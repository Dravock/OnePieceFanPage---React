import React from 'react'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ImageUploader() {
    return (
        <section id="rp-media-Uploader" className=''>
            <div className='flex flex-col bg-slate-100 items-center'>
                <div className=' border-2 border-black border-dotted px-16 py-4 my-4 '>
                    <h2 className='mt-4 mb-2  text-2xl font-bold'>Bild hochladen</h2>
                    <h3 className='mb-4 text-xl'>Klicken Sie auf den Button <b>"+"</b> um Ihre Bilder vom Gerät hochzuladen. </h3>
                    <input type="file" className='bg-green-600/80 hover:bg-green-700/80 rounded-xl p-2 text-white w-16 mb-4' /><FontAwesomeIcon icon={faPlus} className='font-bold'/>
                </div>
            </div>
        </section>
    )
}

export default ImageUploader