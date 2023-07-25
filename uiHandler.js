import * as state from './state.js';


const remoteViewPlayer = document.getElementById('remote-view');
const localViewPlayer = document.getElementById('local-view');
const remoteArena = document.getElementById('remote-arena')

export let setlocalViewSrc = (stream)=>{
    localViewPlayer.srcObject = stream;
}

export let setRemoteViewSrc = (stream)=>{
    //remoteViewPlayer.srcObject = stream;
    let audioTracks = stream.getAudioTracks();
    let videoTracks = stream.getVideoTracks();
    console.log("Video Tracks",videoTracks);
        const streamToShow = new MediaStream();
        streamToShow.addTrack(videoTracks[1]);
        //streamToShow.addTrack(audioTracks[i]);

        const videoPlayer = document.createElement('video');
        videoPlayer.setAttribute('controls', '');
        videoPlayer.setAttribute('width', '320');
        videoPlayer.setAttribute('height', '240');

        // Set the source of the video player.
        videoPlayer.srcObject= streamToShow;

        // Append the video player to arena
        remoteArena.appendChild(videoPlayer);

}