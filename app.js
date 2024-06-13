const columns = document.querySelectorAll('.column__cards');
const cards = document.querySelectorAll('.card');

let draggerCard; // Armazena a to do temporariamente

const dragStart = ({target}) => { // Função respónsavel por iniciar a ação de arrastar a to do.
  draggerCard = target;
}

cards.forEach((card) => {
  card.addEventListener("dragstart", dragStart)
})