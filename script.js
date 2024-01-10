var audio = document.getElementById('audio')

function playAudio () {
  if (audio.paused) {
    audio.play()
  } else {
    audio.pause()
    audio.currentTime = 0
  }
}
