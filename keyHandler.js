import * as state from './state.js';

export const getKinesisKeys = async ()=>{
    const url = 'https://7a5tspbrqi.execute-api.ap-southeast-1.amazonaws.com/default/AV-getSMKeys';
    try{
        let secret = await fetch(url,{method:'GET'});
        secret= await secret.json();
        state.setKeys(secret);
        console.log("Secret set",state);
    }catch(err){
        console.log("Error while getting secret",err);
        state.setKeys({'secretKey':null,'secretValue':null});
    }
};