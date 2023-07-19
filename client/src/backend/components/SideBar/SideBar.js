import React from 'react'
import Sidebar_Pref from '../inc/enums/SideBarPref'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGaugeHigh , faGears ,faPhotoFilm ,faSquarePlus , faPalette, faFileLines} from '@fortawesome/free-solid-svg-icons'


function SideBar() {
    const title = "One Piece World"

    const sb_buttons = Sidebar_Pref

 

    const getIcon =(title)=>{
        let icon
        switch (title) {
            case "Dashboard":
                icon = faGaugeHigh
                break;
            case "Medien":
                icon = faPhotoFilm
                break;
            case "Einstellungen":
                icon = faGears
                break;
            case "Plugins":
                icon = faSquarePlus
                break;
            case "Design":
                icon = faPalette
                break;
            case "Seiten":
                icon = faFileLines
                break;
            default:
                icon = ""
                break;
        }
        return icon
    }

    return (
        <div className='flex flex-col h-[92.25vh] bg-black/40 col-span-1 p-4'>
            <h2 className='text-white font-bold'>{title}</h2>
                {sb_buttons.map(({title,url},index)=>
                    <a href={process.env.REACT_APP_BASE_URL+process.env.REACT_APP_ADMIN_AREA+url+"?single=false"} className='flex mt-4 bg-black/20 text-gray-200 p-1 min-w-[2.6rem]' key={index}>
                        <span className='w-[15%]'>
                            <FontAwesomeIcon icon={getIcon(title)} className='ml-1'/>
                        </span> 
                        <span className='w-[85%] hidden lg:block ml-2'>
                            {title}
                        </span>
                    </a>
                )}
        </div>
    )
}

export default SideBar