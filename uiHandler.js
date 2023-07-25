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

    videoTracks.forEach((vidTrack,i) => {
        const streamToShow = new MediaStream();
        streamToShow.addTrack(vidTrack);
        streamToShow.addTrack(audioTracks[i]);

        const videoPlayer = document.createElement('video');
        videoPlayer.setAttribute('controls', '');
        videoPlayer.setAttribute('width', '320');
        videoPlayer.setAttribute('height', '240');

        // Set the source of the video player.
        videoPlayer.setAttribute('srcObject', streamToShow);

        // Append the video player to arena
        remoteArena.appendChild(videoPlayer);

    });
}