
// When i click on a card callback this function
function onCardClicked(e) {
    const target = e.currentTarget;
    console.log(target.className);
    
}

// keep card the same way i i havent clicked on it
if (!clickedCard)
    target.className = target.className.replace('color-hidden', '').trim();
    ClickedCard = target;
} else if(Clickedcard)