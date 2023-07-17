import React from 'react'

function RpAdminSinglePage(props) {

    const {SinglePageData} = props

    return (
        <div>
            <h1 className='text-3xl'>{SinglePageData.title} - <b>Bearbeiten</b></h1>
            <a href={process.env.REACT_APP_BASE_URL+SinglePageData.link+SinglePageData.link_param1}><span className='text-blue-500 text-xs hover:underline'>{process.env.REACT_APP_BASE_URL+SinglePageData.link+SinglePageData.link_param1}</span></a>
        </div>
    )
}

export default RpAdminSinglePage