// Floating love emojis
const emojiContainer = document.querySelector('.emoji-container');
const emojis = ['❤️','💖','💕','💘','💞','💓','💗'];

function createEmoji() {
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + 'vw';
  emoji.style.bottom = '-50px'; // Start below the viewport
  emoji.style.animationDuration = (Math.random() * 3 + 3) + 's';
  emoji.style.animationName = 'floatUp'; // Use a custom animation
  emojiContainer.appendChild(emoji);
  setTimeout(() => emoji.remove(), 6000);
}

setInterval(createEmoji, 300);

// Add CSS for the animation
const style = document.createElement('style');
style.innerHTML = `
  .emoji {
    position: absolute;
    font-size: 2rem;
    animation-timing-function: ease-out;
  }
  @keyframes floatUp {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100vh); /* Move upwards out of the viewport */
    }
  }
`;
document.head.appendChild(style);

// Background gradient changer
function changeBackground() {
  const gradients = [
    'linear-gradient(to right, #ff9a9e, #fad0c4)',
    'linear-gradient(to right, #a1c4fd, #c2e9fb)',
    'linear-gradient(to right, #fbc2eb, #a6c1ee)',
    'linear-gradient(to right, #f6d365, #fda085)',
    'linear-gradient(to right, #84fab0, #8fd3f4)',
    'linear-gradient(to right, #e0c3fc, #8ec5fc)',
    'linear-gradient(to right, #f093fb, #f5576c)',
    'linear-gradient(to right, #a18cd1, #fbc2eb)'
  ];

  const bg = gradients[Math.floor(Math.random() * gradients.length)];
  document.body.style.background = bg;
}
window.addEventListener('click', function () {
  const music = document.getElementById('bg-music');
  if (music.paused) {
    music.play();
  }
});
document.getElementById('play-audio-button').addEventListener('click', () => {
  const audio = document.getElementById('background-audio');
  if (audio.paused) {
    audio.play().catch(error => {
      console.log('Audio playback was prevented:', error);
    });
  } else {
    audio.pause();
  }
});
