let score = 0;
let currentMusicIndex = 0;
let musicStarted = false;

const musicPlaylist = ['meditative-music1.mp3', 'meditative-music2.mp3', 'meditative-music3.mp3'];
const backgroundMusic = document.getElementById('background-music');
backgroundMusic.volume = 0.5;

document.getElementById('click-btn').addEventListener('click', function() {
  if (!musicStarted) {
    startBackgroundMusic();
    musicStarted = true;
  }

  if (!isAnimating()) {
    animateButtonClick();
    score++;
    updateScore();
    updateFill();
  }
});

backgroundMusic.addEventListener('ended', function() {
  currentMusicIndex = (currentMusicIndex + 1) % musicPlaylist.length;
  backgroundMusic.src = musicPlaylist[currentMusicIndex];
  backgroundMusic.play();
});

function startBackgroundMusic() {
  backgroundMusic.src = musicPlaylist[currentMusicIndex];
  backgroundMusic.play();
}

function animateButtonClick() {
  const btn = document.getElementById('click-btn');
  btn.classList.add('clicked');
  setTimeout(() => {
    btn.classList.remove('clicked');
  }, 500);
}

function updateScore() {
  document.getElementById('score').textContent = ' ' + score;
}

function updateFill() {
  const fillElement = document.getElementById('score-circle');
  const maxScore = 100;
  const percentage = (score / maxScore) * 100;
  fillElement.style.setProperty('--percentage', percentage );
}

function isAnimating() {
  const btn = document.getElementById('click-btn');
  return btn.classList.contains('clicked');
}

document.addEventListener('DOMContentLoaded', function() {
  // Не начинать воспроизведение фоновой музыки автоматически
  // backgroundMusic.play();
});
