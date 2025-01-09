const cardButton = document.querySelector('.card__share-button');
const cardTooltip = document.querySelector('.card__tooltip');

cardButton.addEventListener('click', () => {
    if (cardTooltip) {

        cardTooltip.classList.toggle('active');

        const isTooltipVisible = cardTooltip.classList.contains('active');
        cardTooltip.setAttribute('aria-hidden', !isTooltipVisible);
        cardButton.setAttribute('aria-expanded', isTooltipVisible);
    }

    cardButton.classList.toggle('active');
});