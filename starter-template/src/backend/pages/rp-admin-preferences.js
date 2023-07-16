import React, { useState } from 'react'

function RpAdminPreferences() {

    

    const changelistener =(e)=>{
        console.log("hier bin ich noch ")
    }

    

    return (
        <div>
            <h1 className='text-3xl font-bold underline text-white/70 mb-4'>Einstellungen</h1>
            <div className='grid grid-cols-12 gap-4 p-4 bg-slate-300 min-h-[85vh]'>
                <div className='p-4 col-span-3 bg-slate-500/50'>
                    <h2 className='text-lg font-bold mb-4'>Container</h2>
                    <form>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Container Width</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                        </div>
                    </form>
                </div>
                <div className='p-4 col-span-3 bg-slate-500/50'>
                    <h2 className='text-lg font-bold  mb-4'>Farben</h2>
                    <form>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website Accent Farbe</label>
                                <input onChange={changelistener} type="color" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                            <p></p>
                        </div>
                    </form>
                </div>
                <div className='p-4 col-span-3 bg-slate-500/50'>
                    <h2 className='text-lg font-bold'>Lorem</h2>
                </div>
                <div className='p-4 col-span-3 bg-slate-500/50'>
                    <h2 className='text-lg font-bold'>Lorem</h2>
                </div>

            </div>
        </div>
    )
}

export default RpAdminPreferences