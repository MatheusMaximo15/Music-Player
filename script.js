const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const cover = document.getElementById("cover");
const song = document.getElementById("audio");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

const iBelieve = {
  songName: "I Believe in Rock 'N' Roll",
  artist: "Twisted Sister",
  file: "IBelieve",
};
const iWannaRock = {
  songName: "I Wanna Rock",
  artist: "Twisted Sister",
  file: "I_Wanna_Rock",
};
let isPlaying = false;
const playlist = [iBelieve, iWannaRock];
let index = 0;

function playSong() {
  play.querySelector(".bi").classList.remove("bi-play-circle");
  play.querySelector(".bi").classList.add("bi-pause-circle");
  song.play();
  isPlaying = true;
}
function pauseSong() {
  play.querySelector(".bi").classList.add("bi-play-circle");
  play.querySelector(".bi").classList.remove("bi-pause-circle");
  song.pause();
  isPlaying = false;
}

function playPauseDecider() {
  if (isPlaying === true) {
    pauseSong();
  } else {
    playSong();
  }
}

function initializeSong() {
  cover.src = `imagens/${playlist[index].file}.webp`;
  song.src = `musicas/${playlist[index].file}.mp3`;
  songName.innerText = playlist[index].songName;
  bandName.innerText = playlist[index].artist;
}

function previousSong() {
  if (index === 0) {
    index = playlist.length - 1;
  } else {
    index -= 1;
  }
  initializeSong();
  playSong();
}

function nextSong() {
  if (index === playlist.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  initializeSong();
  playSong();
}

initializeSong();

play.addEventListener("click", playPauseDecider);
previous.addEventListener("click", previousSong);
next.addEventListener("click", nextSong);
