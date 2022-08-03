const $video  = document.querySelector('#video');
const $play  = document.querySelector('#play');
const $pausa  = document.querySelector('#pause');
const $backward  = document.querySelector('#backward');
const $forward  = document.querySelector('#forward');

$play.addEventListener('click',handlePlay);
$pausa.addEventListener('click',handlePausa);

function handlePlay(){
    $video.play();
    $play.hidden = true;
    $pausa.hidden = false;
}

function handlePausa(){
    $video.pause();
    $pausa.hidden=true;
    $play.hidden = false;
}

$backward.addEventListener('click',handleBackward);

function handleBackward(){
    //$video.currentTime= $video.currentTime- 10;
    $video.currentTime -=10;
}

$forward.addEventListener('click',handleForward);

function handleForward(){
    $video.currentTime= $video.currentTime+ 10;

}
const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata',handleLoaded);
$video.addEventListener('timeupdate',handletimeUpdate);

function handleLoaded(){
    $progress.max = $video.duration;
    
}

function handletimeUpdate(){
    $progress.value= $video.currentTime;
}

$progress.addEventListener('input',handleInput);

function handleInput(){
    $video.currentTime= $progress.value;
}