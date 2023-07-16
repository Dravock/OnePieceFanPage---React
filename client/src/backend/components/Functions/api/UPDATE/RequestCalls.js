import Cookies from 'universal-cookie';
import axios from 'axios';
import Messages from '../../../../../includes/enums/Messages';


export const rp_UPDATE_Hook = async (api_path) => {

    const cookies = new Cookies()
    const token = cookies.get('token')

    
    if(typeof token === 'undefined') {
        throw Messages.unauthorized.message
    }

    return axios.get(process.env.REACT_APP_BASE_URL+`${api_path}`, {headers: {'Authorization':"Bearer " +token}})
                    .then((response)=>{
                        
                    }
                    )
                    .catch((error) => {
                        if(error.response.status === 401){
                            throw Messages.unauthorized.message 
                        }else{
                            throw Messages.error.message
                        }
    })
}
export const rp_DELETE_Hook = async (api_path) => {

    const cookies = new Cookies()
    const token = cookies.get('token')

    
    if(typeof token === 'undefined') {
        throw Messages.unauthorized.message
    }

    return axios.get(process.env.REACT_APP_BASE_URL+`${api_path}`, {headers: {'Authorization':"Bearer " +token}})
                    .then((response)=>{
                        
                    }
                    )
                    .catch((error) => {
                        if(error.response.status === 401){
                            throw Messages.unauthorized.message 
                        }else{
                            throw Messages.error.message
                        }
    })
}