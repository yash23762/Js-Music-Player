console.log("Lets roll music");
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressBar=document.getElementById('myProgressBar')
let songs=[
    {songName:"songname", filePath:"1.mp3", coverPath:"cover/1.jpg"},
    {songName:"songname", filePath:"1.mp3", coverPath:"cover/1.jpg"},
    {songName:"songname", filePath:"1.mp3", coverPath:"cover/1.jpg"},
    {songName:"songname", filePath:"1.mp3", coverPath:"cover/1.jpg"},
    {songName:"songname", filePath:"1.mp3", coverPath:"cover/1.jpg"},
    {songName:"songname", filePath:"1.mp3", coverPath:"cover/1.jpg"}
]

masterPlay.addEventListener ('click',()=>{
    if (audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

//audioElement.play();
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogressBar.value=progress;

})
myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressBar.value*audioElement.duration/100;
})