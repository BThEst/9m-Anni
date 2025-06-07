const container = document.querySelector('.hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // สุ่มตำแหน่งซ้าย + ความเร็วต่างกัน
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';

  container.appendChild(heart);

  // ลบหัวใจเมื่อ animation จบ
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// สร้างหัวใจจำนวนหนึ่งเรื่อย ๆ
setInterval(createHeart, 300); // สร้างทุก 300ms
