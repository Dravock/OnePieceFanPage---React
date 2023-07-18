import React, { useEffect, useState } from 'react'
import SinglePage from './rp-admin-single-page'
import { useNavigate , createSearchParams , useSearchParams} from 'react-router-dom'

function RpAdminPages() {

  const edit ="edit=true"

  const navigate = useNavigate()  
  const [searchParams] = useSearchParams();
  console.log(searchParams)

  let url
  let singleView

  const [showContent , setShowContent] = useState(window.location.href)
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

  

  useEffect(() => {
    url = new URL(window.location.href);
    singleView = url.searchParams.get("single");
    console.log(singleView);
  }, [])
  

  const navigatePage =(title)=>{
    const params = { single: 'true', page: title };
    navigate({pathname:'/rp-admin/pages',
              search:`?${createSearchParams(params)}`,
            })
  }


  const renderPage = (title,link,link_param1) =>{
    setShowContent({all:false,single:true})
    setSinglePageData({title:title,link:link,link_param1:link_param1})
    navigatePage(title)
  }
  
  const renderPageUndo = () =>{
    setShowContent({all:true,single:false})
  }

  return (
    <div>
        <h1 className='text-3xl font-bold underline text-white/70 mb-4'>Seiten</h1>
        {showContent.single !== true ?
          <div className='p-4 bg-slate-300 min-h-[85vh]'>
            {testArrayPages.map(({title,link,link_param1},index)=>
              <div className='bg-slate-500 w-full my-4 p-2' key={index}>
                <h2 className='cursor-default font-bold'  >{title}</h2>
                <div className='flex gap-2 border border-black p-1'>
                  <button onClick={()=>renderPage(title,link,link_param1)} className='text-blue-400 hover:text-blue-300 hover:underline text-lg'>Bearbeiten</button>
                  <a href="#" className='text-blue-400 hover:text-red-600 hover:underline text-lg'>Löschen</a>
                </div>
              </div>
            )}
          </div>
          :
          null
        }

        {showContent.single === true ?  
          <div className='p-4 bg-slate-300 min-h-[85vh]'>
            <SinglePage  SinglePageData={SinglePageData} renderPageUndo={renderPageUndo}/>
          </div>
          : 
          null
        }
    </div>
  )
}

export default RpAdminPages