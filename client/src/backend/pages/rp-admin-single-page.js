import React, { useEffect } from 'react'
import Apps from '../../Pages/Public/AppS'
import World from '../../Pages/Public/World'

function RpAdminSinglePage(props) {
    const { SinglePageData, renderPageUndo } = props

    var url_string = window.location.href;

    var url = new URL(url_string);
    var page = url.searchParams.get("page");
    var singleView = url.searchParams.get("single");

    
    useEffect(() => {
        createEditButton()
    }, [])
    

    const createEditButton = () => {
        const getSections = document.querySelectorAll(`#edit-mode-Single-Page section`)
        let count = 0 
        getSections.forEach(singleSection => {
            singleSection.classList.add("relative")
                const newDiv = document.createElement("div")
                newDiv.setAttribute("name", `edit-mode-tool-box`)
                newDiv.setAttribute("class", `edit-mode-tool-box`)
                const append_to_section = singleSection.appendChild(newDiv)
                count ++ ;
        });
        const getToolBox = document.querySelectorAll(`.edit-mode-tool-box`)
        getToolBox.forEach(item => {
            item.classList.add("absolute","w-10", "h-10","bg-green-500","top-0","left-0" , "z-30","hover:bg-red-500")
        })
        console.log(getToolBox);
    }



    return (
        <>
            <div className='edit-mode--Header border border-blue-400 p-2 bg-[#295cc2aa] text-white'>
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