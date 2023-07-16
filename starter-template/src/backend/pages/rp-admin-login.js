import React, { useState } from 'react'
import CrewImg from '../../includes/img/png/onePiece/crew.png'

function RpAdminLogin() {

    const test = ""
    const [test1 ,setTest1]=useState()

    return (
        <div className='flex items-center justify-center h-[88vh]'>
            <div className='h-[40rem] w-[40rem] bg-slate-300/50 rounded-lg p-4 border '>

                <div className='w-full  overflow-hidden h-[380px] '>
                    <img src={CrewImg} width={"70%"} className='mx-auto'/>
                </div>
                <form className='flex flex-col'>
                    <label>Username</label>
                    <input type='text' className='mb-4 rounded-md'/>

                    <label>Password</label>
                    <input type="password" className='mb-4 rounded-md'/>

                    <div className='flex justify-center'>
                        <button type='submit' className='bg-blue-700/80 w-28 rounded-md hover:bg-blue-500 px-2 py-1 shadow-md'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RpAdminLogin