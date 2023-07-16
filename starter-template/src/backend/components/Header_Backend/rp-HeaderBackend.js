import React from 'react'

function HeaderBackend() {

   
    const title = "Dashboard"

    const url= window.location.pathname

    const test_HeaderLinks = [
        {
            title:"Dashboard",
            url:"#"
        },
        {
            title:"Zur Webseite",
            url:process.env.REACT_APP_BASE_URL
        },
    ]

    const urlArray = url.split("/")

    const setEditMode = ()=>{
        sessionStorage.setItem("editMode",true)
    }

    return (
        <div className='flex w-full bg-slate-700 p-2 select-first'>
            {test_HeaderLinks.map(({title,url},index)=>
                <a href={url} className='block text-white mx-4' key={index}>{title}</a>
            )}
            <div className='flex'>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
                <p className='font-bold'>Edit </p>
            </div>
        </div>
    )
}

export default HeaderBackend