
// When i click on a card callback this function
function onCardClicked(e) {
    const target = e.currentTarget;
    // console.log(target.className);
    
    target.className = target.className.replace('color-hidden', '').trim();
    // ClickedCard = target;
console.log(target.attr('data-color'));
    // keep card the same way i i havent clicked on it
    if (!clickedCard) {
    clickedCard = target;
    }   
    else if (clickedCard) {
        // if we already clicked a card, check if the new card matches the old card color
        if (
            clickedCard.getAttribute('data-color') === target.Attribute('data-color')
        ) {
            clickedCard.className += 'done'
            target.className += 'done'
        }
}    }