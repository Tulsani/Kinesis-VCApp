let state = {
    localStream :  null,
    remoteStream : null, 
    kinesisVideoClient : null,
    audio_video: false,
    secretKey:null,
    secretValue:null,
    userId:null
}

export const setLocalStream = (stream)=>{
    state = {
        ...state,
        localStream:stream
    };
};

export const setRemoteStream = (stream)=>{
    state = {
        ...state,
        remoteStream:stream
    }
};

export const setKinesisVideoClient = (kvc)=>{
    state = {
        ...state,
        kinesisVideoClient: kvc
    }
};

export const toggleAudioVideoState = ()=>{
    if(state.audio_video){
        state.audio_video= false;
    }else{
        state.audio_video= true;
    }
}
export const setKeys = (secret)=>{
    state = {
        ...state,
        secretKey: secret.secretKey,
        secretValue: secret.secretValue
    }
}
export const setUserId = (userId)=>{
    state = {
        ...state,
        userId:userId
    }
}
export const getState = ()=>{
    return state;
};


