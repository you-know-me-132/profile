const cards = document.querySelectorAll('.card');
let currentCard = 0;
let startX, currentX, deltaX;

cards[currentCard].classList.remove('hidden');

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    if (!startX) return;
    currentX = event.touches[0].clientX;
    deltaX = currentX - startX;

    cards[currentCard].style.transform = `translateX(${deltaX}px)`;
}

function handleTouchEnd() {
    if (Math.abs(deltaX) > 100) {
        cards[currentCard].classList.add('hidden');
        currentCard = (currentCard + (deltaX > 0 ? -1 : 1) + cards.length) % cards.length;
        cards[currentCard].classList.remove('hidden');
    }

    cards[currentCard].style.transform = '';
    startX = null;
    deltaX = null;
}

cards.forEach(card => {
    card.addEventListener('touchstart', handleTouchStart);
    card.addEventListener('touchmove', handleTouchMove);
    card.addEventListener('touchend', handleTouchEnd);
});
