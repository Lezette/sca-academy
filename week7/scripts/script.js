const divEl = document.querySelector("#follower");

document.querySelector('.container').addEventListener('mousemove', function (event) {


  const containerRect = this.getBoundingClientRect();

  const centerX = containerRect.left + containerRect.width / 2;
  const centerY = containerRect.top + containerRect.height / 2;
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const angle = Math.atan2(mouseY - centerY, mouseX - centerX);

  const angleDeg = angle * (180 / Math.PI);
  const distance = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));

  follower.style.transform = `translate(-50%, -50%) rotate(${angleDeg}deg) translateY(-${distance}px)`;

})

// getBoundingClientRect