import React from 'react'
import Apps from '../../Pages/Public/AppS'

function RpAdminSinglePage(props) {

    const {SinglePageData,renderPageUndo} = props

    return (
        <>
            <div className='edit-mode--Header border border-blue-400 p-2 bg-[#295cc2aa] text-white'>
                <button onClick={()=>renderPageUndo()} className='mb-4 shadow-lg bg-slate-500/20 hover:bg-slate-400/20 text-white hover:text-black hover:underline text-lg border border-black px-4'>Zurück</button>
                
                <h1 className='text-3xl'>{SinglePageData.title} - <b>Bearbeiten</b></h1>
                
                <a href={process.env.REACT_APP_BASE_URL+SinglePageData.link+SinglePageData.link_param1}><span className='text-slate-200 text-xs hover:underline'>{process.env.REACT_APP_BASE_URL+SinglePageData.link+SinglePageData.link_param1}</span></a>
            </div>
            <main id="edit-mode-Single-Page">
                <Apps />
            </main>

        </>
    )
}

export default RpAdminSinglePage