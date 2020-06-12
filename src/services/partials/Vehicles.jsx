import axios from 'axios';

const Vehicles = {
    // get Mark data
    getMark: async () => {                
        return axios.get("Make").then((res)=> {            
            if(res.status === 200){                
                return res.data;
            }
        }).catch((error)=>{
            console.log("Error to get vehicle mark" + error);
        })    
                
    },

    // get Model data
    getModel: (markId) => {
        return axios.get("Model",{
            params : {
                MakeID : markId
            }
        }).then((res)=> {            
            if(res.status === 200){                
                return res.data;
            }
        }).catch((error)=>{
            console.log("Error to get vehicle model" + error);
        })    
    },

    // get Version data
    getVersion : async (modelId)  => {
        return axios.get("Version",{
            params : {
                ModelID : modelId
            }
        }).then((res)=> {            
            if(res.status === 200){                
                return res.data;
            }
        }).catch((error)=>{
            console.log("Error to get vehicle version" + error);
        })    
    },

    // get Vehicles data
    get : async (page = 1)  => {
        return axios.get("Vehicles",{
            params : {
                Page : page
            }
        }).then((res)=> {            
            if(res.status === 200){                
                return res.data;
            }
        }).catch((error)=>{
            console.log("Error to get vehicle version" + error);
        })    
    }

}

export default Vehicles;




