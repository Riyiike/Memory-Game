
// 
// use the query selector 
const cards  = [...document.querySelectorAll ('.card')];
// loop through all the cards
for (const card of cards){
    // console.log (card)
    // Adding the event listener to all the cards.
    card.addEventListener('click',viewCard)
}

// Defining function viewCard by using the HTML DOM classList property  to toggle between open and view when the card is clicked
function viewCard () {

    this.classList.toggle("clicked");
    this.classList.toggle("view");
    this.classList.toggle("disabled");
};










// const logos = [
//     'stack-overflow',
//     'github',
//     'dribble',
//     'appple',
//     'codepen',
//     'chrome'
// ];