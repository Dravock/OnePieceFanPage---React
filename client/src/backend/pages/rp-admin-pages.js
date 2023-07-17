import React, { useState } from 'react'
import SinglePage from './rp-admin-single-page'

function RpAdminPages() {

  const edit ="edit=true"

  const [showContent , setShowContent] = useState({all:true , single:false})
  const [SinglePageData,setSinglePageData] = useState({})
  const [testArrayPages , setTestArrayPages] = useState([
    {
      title:"Startseite",
      link:"/start?",
      link_param1: edit
    },
    {
      title:"World",
      link:"/world?",
      link_param1: edit
    },
    {
      title:"Character",
      link:'/character?',
      link_param1: edit
    },
    {
      title:"About Us",
      link:"/about-us?",
      link_param1: edit
    },
    {
      title:"Impressum",
      link:"/impressum?",
      link_param1: edit
    },
    {
      title:"Datenschutz",
      link:"/datenschutz?",
      link_param1: edit
    },
  ])

  const renderPage = (title,link,link_param1) =>{
    setShowContent({all:false,single:true})
    setSinglePageData({title:title,link:link,link_param1:link_param1})
  }
  
  const renderPageUndo = () =>{
    setShowContent({all:true,single:false})
    
  }
  
  console.log(SinglePageData)

  return (
    <div>
        <h1 className='text-3xl font-bold underline text-white/70 mb-4'>Seiten</h1>
        {showContent.all ?
          <div className='p-4 bg-slate-300 min-h-[85vh]'>
            {testArrayPages.map(({title,link,link_param1},index)=>
              <div className='bg-slate-500 w-full my-4 p-2' key={index}>
                <h2 className='cursor-default font-bold' contentEditable >{title}</h2>
                <div className='flex gap-2 border border-black p-1'>
                  <button onClick={()=>renderPage(title,link,link_param1)} className='text-blue-400 hover:text-blue-300 hover:underline text-lg'>Bearbeiten</button>
                  <a href="" className='text-blue-400 hover:text-red-600 hover:underline text-lg'>Löschen</a>
                </div>
              </div>
            )}
          </div>
          :
          null
        }
        {showContent.single ?  
          <div className='p-4 bg-slate-300 min-h-[85vh]'>
            <button onClick={()=>renderPageUndo()} className='mb-4 shadow-lg bg-slate-500/20 hover:bg-slate-400/20 text-blue-500 hover:text-black hover:underline text-lg border border-black px-4'>Zurück</button>
            <SinglePage  SinglePageData={SinglePageData}/>
          </div>
          : 
          null
        }
    </div>
  )
}

export default RpAdminPages