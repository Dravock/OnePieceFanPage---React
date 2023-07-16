import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CrewImg from '../../includes/img/png/onePiece/crew.png'
import { rp_GET_Hook } from '../components/Functions/api/GET/RequestCalls'
import { rp_POST_Hook } from '../components/Functions/api/POST/RequestCalls'
import axios from 'axios'
import Messages from '../../includes/enums/Messages.js';


function RpAdminLogin() {

    const navigate = useNavigate()

    const [inputData,setInputData]=useState()

    const submit = async (e) =>{
        console.log(process.env.REACT_APP_BASE_API_URL + '/login/login.php')
        e.preventDefault()
        await axios.post(process.env.REACT_APP_BASE_API_URL + '/login/login.php',inputData)
            .then((response)=>{
                const requestedData = response.data
                // const options = {
                //     // httpOnly: true, //TODO im Online Betrieb auskommentieren
                //     // secure: true,
                //     path:'/',
                //     expires: new Date(Date.now() +  1000*60*60*5) 
                // }

                navigate('/dashboard')
            })
            .catch((error)=>{
                alert(Messages.loginFailed.message)
            }) 
    }

    const inputListener = (e) => {
        const {name,value}=e.target
        setInputData({...inputData,[name]:value})
    }
    
    const onEnterKey =(e)=> {
        if(e.key === 'Enter'){
        submit()
        }
    }

    console.log(inputData)

    return (
        <div className='flex items-center justify-center h-[75vh] md:h-[88vh]'>
            <div className='w-[35rem] md:h-[40rem] h-[35rem] md:w-[40rem] bg-slate-300/50 rounded-lg p-4 border '>

                <div className='w-full  overflow-hidden h-[325px] md:h-[400px] '>
                    <img src={CrewImg} width={"100%"} className='mx-auto'/>
                </div>

                <form className='flex flex-col' onSubmit={submit}>
                    <label>Username</label>
                    <input type='text' className='mb-4 rounded-md' name="user" onChange={inputListener} />

                    <label>Password</label>
                    <input type="password" className='mb-4 rounded-md' name="pw"  onKeyDown={(e)=>onEnterKey(e)}  onChange={inputListener} />

                    <div className='flex justify-center'>
                        <button type='submit' className='bg-blue-700/80 w-28 rounded-md hover:bg-blue-500 px-2 py-1 shadow-md font-bold'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RpAdminLogin