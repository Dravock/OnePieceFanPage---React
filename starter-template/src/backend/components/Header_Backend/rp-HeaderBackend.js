import React, { useState } from 'react'

function HeaderBackend() {

   
    const title = "Dashboard"

    const [checked,setChecked] = useState(Boolean(localStorage.getItem("editMode") ? localStorage.getItem("editMode"):false))

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
    
    const changeListener = (e)=>{
        setChecked(!checked)
        if(!checked){
            localStorage.setItem("editMode",true)
        }else{
            localStorage.removeItem("editMode")
        }
    }

    console.log(checked)

    return (
        <div className='flex w-full bg-slate-700 p-2 select-first'>
            {test_HeaderLinks.map(({title,url},index)=>
                <>
                    <a href={url} className='block text-white mx-4' key={index}>{title}</a>
                    <span className='text-white'>|</span>
                </>
            )}
            <div className='ml-4 flex'>
                <label class="edit-switch">
                    <input type="checkbox" onChange={changeListener} checked={checked}/>
                    <span class="edit-slider edit-round"></span>
                </label>
                <p className='font-bold ml-2 text-white'>Edit Mode</p>
            </div>
        </div>
    )
}

export default HeaderBackend