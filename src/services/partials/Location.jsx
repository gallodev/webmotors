import axios from 'axios';

const API_KEY = "3be5528213ff4830ace8d926d26452db";

const Location = {    
    
    // get Vehicles data
    get : async (coords)  => {
        return axios.get("https://api.opencagedata.com/geocode/v1/json",{            
            params : {
                q : coords,
                key : API_KEY
            }
        }).then((res)=> {            
            if(res.status === 200){                
                return res.data;
            }
        }).catch((error)=>{
            console.log("Error to location " + error);
        })    
    }

}

export default Location;




