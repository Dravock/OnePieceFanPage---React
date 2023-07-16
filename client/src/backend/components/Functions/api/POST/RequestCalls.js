import Cookies from 'universal-cookie';
import axios from 'axios';
import Messages from '../../../../../includes/enums/Messages';


export const rp_POST_Hook = async ( api_path , inputData ) => {
    console.log(process.env.REACT_APP_BASE_API_URL + `${api_path}`)

    const cookies = new Cookies()
    const token = cookies.get('token')
    
    return await axios.post(process.env.REACT_APP_BASE_API_URL + `${api_path}`,inputData)
                        .then((response)=>{
                            const requestedData = response.data
                            // const options = {
                            //     // httpOnly: true, //TODO im Online Betrieb auskommentieren
                            //     // secure: true,
                            //     path:'/',
                            //     expires: new Date(Date.now() +  1000*60*60*5) 
                            // }
                            console.log(response)
                        })
                        .catch((error) => {
                            if(error.response.status === 401){
                                throw Messages.unauthorized.message 
                            }else{
                                throw Messages.error.message
                            }
    })
}

