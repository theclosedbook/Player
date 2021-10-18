console.log("Welcome to Player")
//Initiazlize the Variables
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs =[
    {SongName : "Let Me Love You", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {SongName : "Let Me Love You", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {SongName : "Let Me Love You", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {SongName : "Let Me Love You", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {SongName : "Let Me Love You", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {SongName : "Let Me Love You", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {SongName : "Let Me Love You", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {SongName : "Let Me Love You", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {SongName : "Let Me Love You", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {SongName : "Let Me Love You", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
]
let audioElement = new Audio('1.mp3');
// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

//Listen to events 
myProgressBar.addEventListener('timeupdate', ()=>{

})

