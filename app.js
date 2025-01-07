const cardButton = document.querySelector('.card__share-button');
const cardTooltip = document.querySelector('.card__tooltip');

cardButton.addEventListener('click', () => {
    if (cardTooltip) {
        cardTooltip.classList.toggle('active');
    }
    cardButton.classList.toggle('active');
});