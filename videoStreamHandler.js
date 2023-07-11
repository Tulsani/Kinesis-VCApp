import * as state from './state.js';


export const setupKinesisVideoStream = async ()=>{
    // setup instance of kinesis video
    const kinesisVideo = new AWS.KinesisVideo({
        region:'ap-southeast-1',
        accessKeyId:state.getState().secretKey,
        secretAccessKey:state.getState().secretValue
    });

    const streamName = `av-test`; // `${state.getState().callId}_${state.getState().userId}`; // utils to check  userId is valid

    let streamParams = {
        StreamName:streamName
    }

    const createStreamResp = await kinesisVideo.createStream(streamParams).promise();
    
    console.log("Stream Created",createStreamResp);
    
    const clientDataStreamParams = {
        streamName:streamName,
        Data:state.getState().localStream
    };

    let pushStreamToKVSResp = await kinesisVideo.putMedia(clientDataStreamParams).promise();
    console.log("push stream to kinesis response",pushStreamToKVSResp);
    
    //ui.recordingStatus(true);

};