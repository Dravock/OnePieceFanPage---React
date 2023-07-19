import React, { useEffect, useState } from 'react'
import Apps from '../../Pages/Public/AppS'
import World from '../../Pages/Public/World'
import { add_edit_toolbox  } from '../components/Functions/CreateElements.js'

function RpAdminSinglePage(props) {
    const { SinglePageData, renderPageUndo } = props

    var url_string = window.location.href;

    var url = new URL(url_string);
    var page = url.searchParams.get("page");
    var singleView = url.searchParams.get("single");

    const [status,setStatus]= useState(false)

    
    useEffect(() => {
        createEditButton()
    }, [])
    

    const createEditButton = () => {
        add_edit_toolbox(setStatus)
    }

    const test =()=>{
        console.log("Hi ich bins");
        return
    }

    console.log(status);

    return (
        <>
            <div className='edit-mode--Header border border-blue-400 p-2 bg-[#295cc2aa] text-white '>
                <a href={process.env.REACT_APP_BASE_URL + "/rp-admin/pages?single=false"} className='mb-4 shadow-lg bg-slate-500/20 hover:bg-slate-400/20 text-white hover:text-black hover:underline text-lg border border-black px-4'>Zurück</a>

                <h1 className='text-3xl'>{SinglePageData.title} - <b>Bearbeiten</b></h1>

                <a href={process.env.REACT_APP_BASE_URL + SinglePageData.link + SinglePageData.link_param1}><span className='text-slate-200 text-xs hover:underline'>{process.env.REACT_APP_BASE_URL + SinglePageData.link + SinglePageData.link_param1}</span></a>
            </div>

            <main id="edit-mode-Single-Page" >
                {page === "Startseite" && <Apps />}
                {page === "World" && <World />}
            </main>

            {/*             :
            <div className='bg-slate-500/50 h-60 flex items-center justify-center mt-[10%]'>
                <h1 className='font-bold text-3xl'>Auf dieser Seite gibt es scheinbar keinen Content :( </h1> 
            </div> */}

        </>
    )
}

export default RpAdminSinglePage