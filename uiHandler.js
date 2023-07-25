import * as state from './state.js';


const remoteViewPlayer = document.getElementById('remote-view');
const remoteViewTwoPlayer = document.getElementById('remote-view-two');
const localViewPlayer = document.getElementById('local-view');
const remoteArena = document.getElementById('remote-arena')

export let setlocalViewSrc = (stream)=>{
    localViewPlayer.srcObject = stream;
}

export let setRemoteViewSrc = (stream)=>{
    remoteViewPlayer.srcObject = streamToShow;
     
    let audioTracks = stream.getAudioTracks();
    let videoTracks = stream.getVideoTracks();

    console.log("Video Tracks",videoTracks);
        const streamToShow = new MediaStream();
        streamToShow.addTrack(videoTracks[videoTracks.length-1]);
        remoteViewPlayer.srcObject= streamToShow;
        //streamToShow.addTrack(audioTracks[i]);

        //const videoPlayer = document.createElement('video');
        //videoPlayer.setAttribute('controls', '');
        // videoPlayer.setAttribute('width', '320');
        // videoPlayer.setAttribute('height', '240');

        // Set the source of the video player.
        // Append the video player to arena
       
    if(videoTracks.length>=2){
        const streamTwoToShow = new MediaStream();
        streamTwoToShow.addTrack(videoTracks[videoTracks.length-2]);
        //streamToShow.addTrack(audioTracks[i]);
        remoteViewTwoPlayer.srcObject= streamTwoToShow;

    }

}