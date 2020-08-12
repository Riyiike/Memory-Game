let clickedCard = null;
let preventClick= false;
let combosFound = 0;

const  colors = [
    'pink',
    'yellow',
    'red',
    'green',
    'blue',
    'orange',
    
]

// When i click on a card callback this function
function onCardClicked(e) {
    const target = e.currentTarget;
    if (
        preventClick || target === clickedCard || target.className.includes('done')
    ) {
        return;
    }
    // console.log(target.className);
    
    target.className = target.className.replace('color-hidden', '').trim();
    // ClickedCard = target;
    // console.log(target.attr('data-color'));
    target.className += 'done';
   
    if (!clickedCard) {
     // keep card the same way i i havent clicked on it
     clickedCard = target;
    }   else if (clickedCard) {
        // if we already clicked a card, check if the new card matches the old card color
        preventClick = true;

        if (
            clickedCard.getAttribute('data-color') === target.getAttribute('data-color')
        ) {
            // console.log ('cards are the same');
            // clickedCard.className += 'done';
            // target.className += 'done';
            // console.log ('cards are not same');
            preventClick = true;
            setTimeout(() => {
                console.log('we are here!!')
                clickedCard.className.replace ('done', '').trim() + 'color-hidden';
                target.className = target.className.replace ('done', '').trim () + 'color-hidden';
                // set the classback to hidden which will nake it disappear
                clickedCard = null;
                preventClick = false;
                   
            },500);   
        } else {
            combosFound ++ ;
            clickedCard =null;
            if (combosFound === 6){
                alert ('YOU WIN!!');
            }
            
        }
}   }