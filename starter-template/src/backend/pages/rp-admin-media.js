import React from 'react'
import ImageUploader from '../components/rp_media/MediaUpload/ImageUploader'
import MediaPreview from '../components/rp_media/MediaPreview/MediaPreview'

function rpAdminMedia() {
    return (
        <div>
            <h1 className='text-3xl font-bold underline text-white/70 mb-4'>Medien</h1>
            <ImageUploader />
            <div className='h-4'></div>
            <MediaPreview />
        </div>
    )
}

export default rpAdminMedia